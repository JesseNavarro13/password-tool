package com.example.server.controllers;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.server.services.PatternAnalysisService;
import java.util.*;

@RestController
@RequestMapping("/api/analyze")
@CrossOrigin(origins = "http://localhost:5173")
public class PatternAnalysisController {

  @Autowired
  private final PatternAnalysisService patternAnalysisService;

  public PatternAnalysisController(PatternAnalysisService patternAnalysisService) {
    this.patternAnalysisService = patternAnalysisService;
  }
  
  @PostMapping("/patterns")
  public Map<String, Object> analyzePatterns(@RequestBody Map<String, String> body) {
    String password = body.get("password");

    System.out.println("PatternAnalysisService is " + patternAnalysisService);

    return patternAnalysisService.analyze(password);
  }
}
