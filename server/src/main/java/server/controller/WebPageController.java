package server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebPageController {
  @GetMapping(value = "/")
  public String root() {
    return "hello";
  }
}
