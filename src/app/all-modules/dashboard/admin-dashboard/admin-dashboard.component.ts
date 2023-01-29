import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"],
})
export class AdminDashboardComponent implements OnInit {
  public chartData;
  public chartOptions;
  public chartData1;
  public chartOptions1;
  public barColors = {
    a: "#ff9b44",
    b: "#fc6075",
  };
  public lineColors = {
    a: "#ff9b44",
    b: "#fc6075",
  };

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      xkey: "y",
      ykeys: ["a", "b"],
      labels: ["Total Incoming", "Total Outgoing"],
      barColors: [this.barColors.a, this.barColors.b],
    };

    this.chartData = [
      { y: "10am", a: 100, b: 90 },
      { y: "11am", a: 75, b: 65 },
      { y: "12pm", a: 50, b: 40 },
      { y: "01pm", a: 75, b: 65 },
      { y: "02pm", a: 50, b: 40 },
      { y: "03pm", a: 75, b: 65 },
      { y: "04pm", a: 100, b: 90 },
    ];

    this.chartOptions1 = {
      xkey: "y",
      ykeys: ["a", "b"],
      labels: ["Nibedon Completed", "Nibedon Pending"],
      barColors: [this.barColors.a, this.barColors.b],
    };

    this.chartData1 = [
      { y: "10am", a: 100, b: 90 },
      { y: "11am", a: 75, b: 65 },
      { y: "12pm", a: 50, b: 40 },
      { y: "01pm", a: 75, b: 65 },
      { y: "02pm", a: 50, b: 40 },
      { y: "03pm", a: 75, b: 65 },
      { y: "04pm", a: 100, b: 90 },
    ];
  }
}
