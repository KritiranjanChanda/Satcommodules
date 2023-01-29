import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { AllModulesService } from "src/app/all-modules/all-modules.service";


import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";
import { DatePipe } from "@angular/common";
import { DataTableDirective } from "angular-datatables";

declare const $: any;
@Component({
  selector: "app-Responsepending-content",
  templateUrl: "./Responsepending-content.component.html",
  styleUrls: ["./Responsepending-content.component.css"],
})
export class ResponsependingContentComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  public url: any = "Responsepending";
  public allResponsepending: any = [];
  public addResponsependingForm: FormGroup;
  public editResponsependingForm: FormGroup;
  public editId: any;
  public tempId: any;

  public rows = [];
  public srch = [];
  public statusValue;
  public dtTrigger: Subject<any> = new Subject();
  public pipe = new DatePipe("en-US");
  public editCreated: any;
  public editLastDate: any;
  constructor(
    private allModuleService: AllModulesService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // for floating label
    $(".floating")
      .on("focus blur", function (e) {
        $(this)
          .parents(".form-focus")
          .toggleClass("focused", e.type === "focus" || this.value.length > 0);
      })
      .trigger("blur");

    this.getResponsepending();
    // Add Responsepending Form Validation And Getting Values
    this.addResponsependingForm = this.formBuilder.group({
      Responsependingubject: ["", [Validators.required]],
      ResponsependingId: ["", [Validators.required]],
      assignStaff: ["", [Validators.required]],
      clientName: ["", [Validators.required]],
      PriorityName: ["", [Validators.required]],
      ccName: ["", [Validators.required]],
      AssignName: ["", [Validators.required]],
      addFlowers: ["", [Validators.required]],
    });

    // Edit Responsepending Form Validation And Getting Values

    this.editResponsependingForm = this.formBuilder.group({
      editResponsependingubject: ["", [Validators.required]],
      editResponsependingId: ["", [Validators.required]],
      editAssignStaff: ["", [Validators.required]],
      editClientName: ["", [Validators.required]],
      editPriorityName: ["", [Validators.required]],
      editccName: ["", [Validators.required]],
      editAssignName: ["", [Validators.required]],
      editaddFlowers: ["", [Validators.required]],
    });

    this.dtOptions = {
      // ... skipped ...
      pageLength: 10,
      dom: "lrtip",
    };
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.dtTrigger.next();
    }, 1000);
  }

  // manually rendering Data table

  rerender(): void {
    $("#datatable").DataTable().clear();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
    });
    this.allResponsepending = [];
    this.getResponsepending();
    setTimeout(() => {
      this.dtTrigger.next();
    }, 1000);
  }

  getResponsepending() {
    this.allModuleService.get(this.url).subscribe((data) => {
      this.allResponsepending = data;
      this.rows = this.allResponsepending;
      this.srch = [...this.rows];
    });
  }

  // Add Responsepending Modal Api Call

  addResponsepending() {
    if (this.addResponsependingForm.valid) {
      // let created = this.pipe.transform(
      //   "12-05-2020",
      //   "dd-MM-yyyy"
      // );
      // let lastDate = this.pipe.transform(
      //   "13-05-2020",
      //   "dd-MM-yyyy"
      // );
      let obj = {
        Responsependingubject: this.addResponsependingForm.value.Responsependingubject,
        ResponsependingId: this.addResponsependingForm.value.ResponsependingId,
        assignedStaff: this.addResponsependingForm.value.assignStaff,
        client: this.addResponsependingForm.value.clientName,
        cc: this.addResponsependingForm.value.ccName,
        priority: this.addResponsependingForm.value.PriorityName,
        assigne: this.addResponsependingForm.value.AssignName,
        addfollow: this.addResponsependingForm.value.addFlowers,
        createdDate: "05-05-2020",
        lastReply: "11-05-2020",
        status: "Pending",
      };
      this.allModuleService.add(obj, this.url).subscribe((data) => {
        $("#datatable").DataTable().clear();
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });
        this.dtTrigger.next();
      });
      this.getResponsepending();
      $("#add_Responsepending").modal("hide");
      this.addResponsependingForm.reset();
      this.toastr.success("Responsepending added", "Success");
    } else {
      this.toastr.warning("Mandatory fields required", "");
    }
  }

  // Edit Responsepending Modal Api Call

  editResponsepending() {
    let obj = {
      Responsependingubject: this.editResponsependingForm.value.editResponsependingubject,
      ResponsependingId: this.editResponsependingForm.value.editResponsependingId,
      assignedStaff: this.editResponsependingForm.value.editAssignStaff,
      client: this.editResponsependingForm.value.editClientName,
      cc: this.editResponsependingForm.value.editccName,
      priority: this.editResponsependingForm.value.editPriorityName,
      assigne: this.editResponsependingForm.value.editAssignName,
      addfollow: this.editResponsependingForm.value.editaddFlowers,
      createdDate: "05-09-2020",
      lastReply: "06-09-2020",
      status: "Approved",
      id: this.editId,
    };
    this.allModuleService.update(obj, this.url).subscribe((data1) => {
      $("#datatable").DataTable().clear();
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
      });
      this.dtTrigger.next();
    });
    this.getResponsepending();
    $("#edit_Responsepending").modal("hide");
    this.editResponsependingForm.reset();
    this.toastr.success("Responsepending updated", "Success");
  }

  edit(value) {
    this.editId = value;
    const index = this.allResponsepending.findIndex((item) => {
      return item.id === value;
    });
    let toSetValues = this.allResponsepending[index];
    this.editResponsependingForm.setValue({
      editResponsependingubject: toSetValues.Responsependingubject,
      editResponsependingId: toSetValues.ResponsependingId,
      editAssignStaff: toSetValues.assignedStaff,
      editClientName: toSetValues.client,
      editPriorityName: toSetValues.priority,
      editccName: toSetValues.cc,
      editAssignName: toSetValues.assigne,
      editaddFlowers: toSetValues.addfollow,
    });
  }

  // Delete Responsepending Modal Api Call
  deleteResponsepending() {
    this.allModuleService.delete(this.tempId, this.url).subscribe((data) => {
      $("#datatable").DataTable().clear();
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
      });
      this.dtTrigger.next();
    });
    this.getResponsepending();
    $("#delete_Responsepending").modal("hide");
    this.toastr.success("Responsepending deleted", "Success");
  }

  //search by name
  searchName(val) {
    this.rows.splice(0, this.rows.length);
    let temp = this.srch.filter(function (d) {
      val = val.toLowerCase();
      return d.assignedStaff.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows.push(...temp);
  }

  //search by status
  searchStatus(val) {
    this.rows.splice(0, this.rows.length);
    let temp = this.srch.filter(function (d) {
      val = val.toLowerCase();
      return d.status.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows.push(...temp);
  }

  searchPriority(val) {
    this.rows.splice(0, this.rows.length);
    let temp = this.srch.filter(function (d) {
      val = val.toLowerCase();
      return d.priority.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows.push(...temp);
  }

  //search by purchase
  searchFrom(val) {
    let mySimpleFormat = this.pipe.transform(val, "dd-MM-yyyy");
    this.rows.splice(0, this.rows.length);
    let temp = this.srch.filter(function (d) {
      return d.createdDate.indexOf(mySimpleFormat) !== -1 || !mySimpleFormat;
    });
    this.rows.push(...temp);
    $(".floating")
      .on("focus blur", function (e) {
        $(this)
          .parents(".form-focus")
          .toggleClass("focused", e.type === "focus" || this.value.length > 0);
      })
      .trigger("blur");
  }

  //search by warranty
  searchTo(val) {
    let mySimpleFormat = this.pipe.transform(val, "dd-MM-yyyy");
    this.rows.splice(0, this.rows.length);
    let temp = this.srch.filter(function (d) {
      return d.lastReply.indexOf(mySimpleFormat) !== -1 || !mySimpleFormat;
    });
    this.rows.push(...temp);
    $(".floating")
      .on("focus blur", function (e) {
        $(this)
          .parents(".form-focus")
          .toggleClass("focused", e.type === "focus" || this.value.length > 0);
      })
      .trigger("blur");
  }

  //getting the status value
  getStatus(data) {
    this.statusValue = data;
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
