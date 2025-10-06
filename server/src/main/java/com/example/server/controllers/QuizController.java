/*
package com.example.server.controllers;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/quiz")
@CrossOrigin(origins = "https://localhost:3000")
public class QuizController {

  private final QuizQuestionRepository quizRepo;

  public QuizController(QuizQuestionRepository quizRepo) {
    this.quizRepo = quizRepo;
  }

  @GetMapping("/questions")
  public List<QuizQuestions> getQuestions() {
    return quizRepo.findAll();
  }
}
*/