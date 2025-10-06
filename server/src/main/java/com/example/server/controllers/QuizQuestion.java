package com.example.server.controllers;
import java.util.*;

public class QuizQuestion {
  private Long id;
  private String type;
  private String question;
  private List<String> options;
  private String answer;

  public QuizQuestion(){

  }

  public void setID(Long id) {
    this.id = id;
  }

  public void setType(String type) {
    this.type = type;
  }

  public void setQuestion(String question) {
    this.question = question;
  }

  public void options(List<String> options) {
    this.options = options;
  }

  public void answer(String answer) {
    this.answer = answer;
  }

  public Long getID() {
    return id;
  }

  public String getType() {
    return type;
  }

  public String getQuestion() {
    return question;
  }

  public List<String> getOptions() {
    return options;
  }

  public String getAnswer() {
    return answer;
  }

}