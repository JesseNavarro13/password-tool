package com.example.server.services;

import org.springframework.stereotype.Service;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;
import java.nio.charset.StandardCharsets;
import java.io.*;
import java.util.*;
import java.util.regex.*;

@Service
public class PatternAnalysisService {

  private final List<String> KEYBOARD_PATTERNS = new ArrayList<>();
  private final Set<String> COMMON_WORDS = new HashSet<>();

  public PatternAnalysisService() {
    loadLists();
  }

  private void loadLists() {
     try { 
      loadLinesIntoList("/services/keyboard_patterns.txt", KEYBOARD_PATTERNS);
      loadCommonPasswords("/services/100000-most-common-passwords.json");
      System.out.println("Loaded " + KEYBOARD_PATTERNS.size() + " keyboard patterns.");
      System.out.println("Loaded " + COMMON_WORDS.size() + " common passwords/words.");
     } catch (IOException e) {
      System.err.println("Error loading resource files:");
      e.printStackTrace();
     }
  }

  private void loadLinesIntoList(String resourcePath, List<String> target) throws IOException {
    try (InputStream is = getClass().getResourceAsStream(resourcePath)) {
      if (is == null) {
        System.err.println("Resource not found: " + resourcePath);
        return;
      }
      try (BufferedReader br = new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8))) {
        String line;
        while ((line = br.readLine()) != null) {
          line = line.trim();
          if(!line.isEmpty()) {
            target.add(line.toLowerCase());
          }
        }
      } catch (Exception e) {
        System.err.println("Error reading resource " + resourcePath);
        e.printStackTrace();
      }
    }
  }

  private void loadCommonPasswords(String resourcePath) throws IOException {
    try(InputStream is = getClass().getResourceAsStream(resourcePath)) {
      if (is == null) {
        System.err.println("Common passwords resource not found: " + resourcePath);
        return;
      }
      ObjectMapper mapper = new ObjectMapper();
      List<String> list = mapper.readValue(is, new TypeReference<List<String>>() {});
      for (String w : list) {
        if (w != null && !w.trim().isEmpty()) {
          COMMON_WORDS.add(w.trim().toLowerCase());
        } 
      }
    } catch (Exception e) {
        System.err.println("Error loading common passwords from " + resourcePath);
        e.printStackTrace();
    } 
  }

  public Map<String, Object> analyze(String password) {
    List<Map<String, String>> segments = new ArrayList<>();

    Pattern pattern = Pattern.compile("([A-Za-z]+|\\d+|[^A-Za-z0-9]+)");
    Matcher matcher = pattern.matcher(password);

    while (matcher.find()) {
      String token = matcher.group();
      String type = classifySegment(token);
      String weakness = detectWeakness(token, type);

      Map<String, String> segmentInfo = new HashMap<>();
      segmentInfo.put("text", token);
      segmentInfo.put("type", type);
      segmentInfo.put("weakness", weakness);

      segments.add(segmentInfo);
    }

    Map<String, Object> result = new HashMap<>();
    result.put("segments", segments);
    result.put("isCommonPassword", COMMON_WORDS.contains(password.toLowerCase()));

    return result;
  }
  
  private String classifySegment(String token) {
    if(token.matches("[A-Za-z]+")) {
      return "letters";
    } else if(token.matches("\\d+")) {
      return "digits";
    } else {
      return "symbols";
    }
  }

  private String detectWeakness(String token, String type) {
    if (type.equals("letters")) {
      String lower = token.toLowerCase();
      if (isSequentialLetters(lower)) {
        return "Sequential pattern";
      }
      if (containsKeyboardPattern(lower)) {
        return "Keyboard pattern";
      }
      if (isCommonWord(lower)) {
        return "Common word/password";
      }
    }
    if (type.equals("digits")) {
      if (token.matches("(19|20)\\d{2}")) {
        return "Year pattern";
      }
      if (isSequentialNum(token)) {
        return "Sequential pattern";
      }
      if (isRepeatingDigits(token)) {
        return "Repeating digits";
      }
    }

    return null;
  }

  private boolean isSequentialLetters(String token) {
    if (!token.matches("[A-Za-z]+")) {
      return false;
    }

    token = token.toLowerCase();

    boolean ascending = true;
    boolean descending = true;

    for (int i = 0; i < token.length() - 1; i++) {
      int current = token.charAt(i);
      int next = token.charAt(i + 1);
      if (next != current + 1) {
        ascending = false;
      }
      if (next != current - 1) {
        descending = false;
      }
    }

    return ascending || descending;
  }

  private boolean isSequentialNum(String token) {
    if (!token.matches("\\d+")) {
      return false;
    }

    boolean ascending = true;
    boolean descending = true;

    for (int i = 0; i < token.length() - 1; i++) {
      int current = token.charAt(i) - '0';
      int next = token.charAt(i + 1) - '0';
      if (next != current + 1) {
        ascending = false;
      }
      if (next != current - 1) {
        descending = false;
      }
    }

    return ascending || descending;
  }

  private boolean containsKeyboardPattern(String token) {
    for (String pattern : KEYBOARD_PATTERNS) {
      if (token.contains(pattern)) {
        return true;
      }
    }
    return false;
  }

  private boolean isCommonWord(String tokenLower) {
    return COMMON_WORDS.contains(tokenLower);
  }

  private boolean isRepeatingDigits(String token) {
    return token.matches("(\\d)\\1+");
  }
}
