import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { HeaderService } from "./header.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  jsonData: any = {
    notification: [],
    message: [],
  };
  notifications: any;
  messagesData: any;

  constructor(private headerService: HeaderService, private router: Router) {}

  ngOnInit() {
    // this.getDatas("notification");
    // this.getDatas("message");

    this.notifications = [
      {
        message: "the status of NIB1234 ",
        author: "Shubon",
        function: "has asked to check",
        time: "4 mins ago",
      },
      {
        message: "the status of NIB4567",
        author: "Tultul",
        function: "has asked to check",
        time: "1 hour ago",
      },
      {
        message: "the status of NIB4567",
        author: "Tultul",
        function: "has asked to check",
        time: "1 hour ago",
      },
      {
        message: "the status of NIB4567",
        author: "Tultul",
        function: "has asked to check",
        time: "1 hour ago",
      },
      {
        message: "the status of NIB4567",
        author: "Tultul",
        function: "has asked to check",
        time: "1 hour ago",
      },
    ];

    this.messagesData = [
      {
        message: "Please provide the status of NIB4895",
        author: "Shubhon",
        time: "4 mins ago",
      },
      {
        message: "Please provide the status of NIB4895",
        author: "Shubhon",
        time: "1 hour ago",
      },
      {
        message: "Please provide the status of NIB4895",
        author: "Shubhon",
        time: "4 mins ago",
      },
      {
        message: "Please provide the status of NIB4895",
        author: "Shubhon",
        time: "1 hour ago",
      },
      {
        message: "Please provide the status of NIB4895",
        author: "Shubhon",
        time: "4 mins ago",
      },
      {
        message: "Please provide the status of NIB4895",
        author: "Shubhon",
        time: "1 hour ago",
      },
    ];
  }

  getDatas(section) {
    this.headerService.getDataFromJson(section).subscribe((data) => {
      this.jsonData[section] = data;
    });
  }

  clearData(section) {
    this.jsonData[section] = [];
  }
  onSubmit() {
    this.router.navigate(["/pages/search"]);
  }
}
