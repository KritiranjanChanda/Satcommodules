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
  selector: "app-Livecalls-content",
  templateUrl: "./Livecalls-content.component.html",
  styleUrls: ["./Livecalls-content.component.css"],
})
export class LivecallsContentComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  public url: any = "Livecalls";
  public allLivecalls: any = [];
  public addLivecallsForm: FormGroup;
  public editLivecallsForm: FormGroup;
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

    this.getLivecalls();
    // Add Livecalls Form Validation And Getting Values
    this.addLivecallsForm = this.formBuilder.group({
      Livecallsubject: ["", [Validators.required]],
      LivecallsId: ["", [Validators.required]],
      assignStaff: ["", [Validators.required]],
      clientName: ["", [Validators.required]],
      PriorityName: ["", [Validators.required]],
      ccName: ["", [Validators.required]],
      AssignName: ["", [Validators.required]],
      addFlowers: ["", [Validators.required]],
    });

    // Edit Livecalls Form Validation And Getting Values

    this.editLivecallsForm = this.formBuilder.group({
      editLivecallsubject: ["", [Validators.required]],
      editLivecallsId: ["", [Validators.required]],
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
    this.allLivecalls = [];
    this.getLivecalls();
    setTimeout(() => {
      this.dtTrigger.next();
    }, 1000);
  }

  getLivecalls() {
    this.allModuleService.get(this.url).subscribe((data) => {
      this.allLivecalls = data;
      this.rows = this.allLivecalls;
      this.srch = [...this.rows];
    });
  }

  // Add Livecalls Modal Api Call

  addLivecalls() {
    if (this.addLivecallsForm.valid) {
      // let created = this.pipe.transform(
      //   "12-05-2020",
      //   "dd-MM-yyyy"
      // );
      // let lastDate = this.pipe.transform(
      //   "13-05-2020",
      //   "dd-MM-yyyy"
      // );
      let obj = {
        Livecallsubject: this.addLivecallsForm.value.Livecallsubject,
        LivecallsId: this.addLivecallsForm.value.LivecallsId,
        assignedStaff: this.addLivecallsForm.value.assignStaff,
        client: this.addLivecallsForm.value.clientName,
        cc: this.addLivecallsForm.value.ccName,
        priority: this.addLivecallsForm.value.PriorityName,
        assigne: this.addLivecallsForm.value.AssignName,
        addfollow: this.addLivecallsForm.value.addFlowers,
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
      this.getLivecalls();
      $("#add_Livecalls").modal("hide");
      this.addLivecallsForm.reset();
      this.toastr.success("Livecalls added", "Success");
    } else {
      this.toastr.warning("Mandatory fields required", "");
    }
  }

  // Edit Livecalls Modal Api Call

  editLivecalls() {
    let obj = {
      Livecallsubject: this.editLivecallsForm.value.editLivecallsubject,
      LivecallsId: this.editLivecallsForm.value.editLivecallsId,
      assignedStaff: this.editLivecallsForm.value.editAssignStaff,
      client: this.editLivecallsForm.value.editClientName,
      cc: this.editLivecallsForm.value.editccName,
      priority: this.editLivecallsForm.value.editPriorityName,
      assigne: this.editLivecallsForm.value.editAssignName,
      addfollow: this.editLivecallsForm.value.editaddFlowers,
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
    this.getLivecalls();
    $("#edit_Livecalls").modal("hide");
    this.editLivecallsForm.reset();
    this.toastr.success("Livecalls updated", "Success");
  }

  edit(value) {
    this.editId = value;
    const index = this.allLivecalls.findIndex((item) => {
      return item.id === value;
    });
    let toSetValues = this.allLivecalls[index];
    this.editLivecallsForm.setValue({
      editLivecallsubject: toSetValues.Livecallsubject,
      editLivecallsId: toSetValues.LivecallsId,
      editAssignStaff: toSetValues.assignedStaff,
      editClientName: toSetValues.client,
      editPriorityName: toSetValues.priority,
      editccName: toSetValues.cc,
      editAssignName: toSetValues.assigne,
      editaddFlowers: toSetValues.addfollow,
    });
  }

  // Delete Livecalls Modal Api Call
  deleteLivecalls() {
    this.allModuleService.delete(this.tempId, this.url).subscribe((data) => {
      $("#datatable").DataTable().clear();
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
      });
      this.dtTrigger.next();
    });
    this.getLivecalls();
    $("#delete_Livecalls").modal("hide");
    this.toastr.success("Livecalls deleted", "Success");
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
