package server.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import server.data.AuthCode;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin
public class AuthenticationController {
  @PostMapping(value = "/auth/google", consumes = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<Long> authGoogle(@RequestBody AuthCode entity) {
    // TODO: handle POST req

    return new ResponseEntity<>(HttpStatus.I_AM_A_TEAPOT);
  }
}
