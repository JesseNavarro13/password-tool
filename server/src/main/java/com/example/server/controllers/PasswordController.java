package com.example.server.controllers;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/password")
@CrossOrigin(origins = "http://localhost:5173")
public class PasswordController {

  @PostMapping("/check")
  public String checkPassword(@RequestBody String password) {
    int num = password.matches(".*\\d.*") ? 1 : 0;
		int upper = password.matches(".*[A-Z].*") ? 1 : 0;
		int lower = password.matches(".*[a-z].*") ? 1 : 0;
		int special = password.matches(".*[!@#$%^&*()].*") ? 1 : 0;

		String key = "" + num + upper + lower + special;
		String message;

		switch(key) {
			case "0001":
				message = "This is only special characters. How are you even supposed to remember that? Add some letters and numbers.";
      	break;
			case "0010":
				message = "This is only lowercase letters. Don't be shy, add some uppercase letters, numbers and special characters.";
				break;
			case "0100":
				message = "This is only uppercase letters. Who are you yelling at? Add some lowercase letters, numbers and special characters.";
				break;
			case "1000":
				message = "This is only numbers. This is a password not a PIN number, try adding some letters and special characters.";
				break;
			case "0011":
				message = "This is only lowercase letters and special characters. Try adding some uppercase letters and numbers.";
				break;
			case "1100":
				message = "This is only uppercase letters and numbers. Try adding some lowercase letters and special characters.";
				break;
			case "1001":
				message = "This is only numbers and special characters. Try adding some uppercase and lowercase letters.";
				break;
			case "0110":
				message = "This is only uppercase and lowercase letters. This is a password not a sentence, try adding some numbers and special characters.";
				break;
			case "0101":
				message = "This is only uppercase letters and special characters. Try adding some lowercase letters and numbers.";
				break;
			case "1010":
				message = "This is only lowercase letters and numbers. Try adding some uppercase letters and special characters.";
				break;
			case "1110":
				message = "Almost there! Try adding some special characters to make your password even stronger.";
				break;
			case "1101":
				message = "Almost there! Try adding some lowercase letters to make your password even stronger.";
				break;
			case "1011":
				message = "Almost there! Try adding some uppercase letters to make your password even stronger.";
				break;
			case "0111":
				message = "Almost there! Try adding some numbers to make your password even stronger.";
				break;
			case "1111":
        if(password.length() < 14) {
          message = "You have a good variety, but consider making it 12 characters or longer.";
        } else {
				  message = "Strong password! Good job!";
        }
				break;
			default:
				message = "Start typing to check password strength";
		}
		
		return message;
	
  }
  
}
