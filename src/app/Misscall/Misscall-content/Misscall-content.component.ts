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
  selector: "app-Misscall-content",
  templateUrl: "./Misscall-content.component.html",
  styleUrls: ["./Misscall-content.component.css"],
})
export class MisscallContentComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  public url: any = "Misscall";
  public allMisscall: any = [];
  public addMisscallForm: FormGroup;
  public editMisscallForm: FormGroup;
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

    this.getMisscall();
    // Add Misscall Form Validation And Getting Values
    this.addMisscallForm = this.formBuilder.group({
      Misscallubject: ["", [Validators.required]],
      MisscallId: ["", [Validators.required]],
      assignStaff: ["", [Validators.required]],
      clientName: ["", [Validators.required]],
      PriorityName: ["", [Validators.required]],
      ccName: ["", [Validators.required]],
      AssignName: ["", [Validators.required]],
      addFlowers: ["", [Validators.required]],
    });

    // Edit Misscall Form Validation And Getting Values

    this.editMisscallForm = this.formBuilder.group({
      editMisscallubject: ["", [Validators.required]],
      editMisscallId: ["", [Validators.required]],
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
    this.allMisscall = [];
    this.getMisscall();
    setTimeout(() => {
      this.dtTrigger.next();
    }, 1000);
  }

  getMisscall() {
    this.allModuleService.get(this.url).subscribe((data) => {
      this.allMisscall = data;
      this.rows = this.allMisscall;
      this.srch = [...this.rows];
    });
  }

  // Add Misscall Modal Api Call

  addMisscall() {
    if (this.addMisscallForm.valid) {
      // let created = this.pipe.transform(
      //   "12-05-2020",
      //   "dd-MM-yyyy"
      // );
      // let lastDate = this.pipe.transform(
      //   "13-05-2020",
      //   "dd-MM-yyyy"
      // );
      let obj = {
        Misscallubject: this.addMisscallForm.value.Misscallubject,
        MisscallId: this.addMisscallForm.value.MisscallId,
        assignedStaff: this.addMisscallForm.value.assignStaff,
        client: this.addMisscallForm.value.clientName,
        cc: this.addMisscallForm.value.ccName,
        priority: this.addMisscallForm.value.PriorityName,
        assigne: this.addMisscallForm.value.AssignName,
        addfollow: this.addMisscallForm.value.addFlowers,
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
      this.getMisscall();
      $("#add_Misscall").modal("hide");
      this.addMisscallForm.reset();
      this.toastr.success("Misscall added", "Success");
    } else {
      this.toastr.warning("Mandatory fields required", "");
    }
  }

  // Edit Misscall Modal Api Call

  editMisscall() {
    let obj = {
      Misscallubject: this.editMisscallForm.value.editMisscallubject,
      MisscallId: this.editMisscallForm.value.editMisscallId,
      assignedStaff: this.editMisscallForm.value.editAssignStaff,
      client: this.editMisscallForm.value.editClientName,
      cc: this.editMisscallForm.value.editccName,
      priority: this.editMisscallForm.value.editPriorityName,
      assigne: this.editMisscallForm.value.editAssignName,
      addfollow: this.editMisscallForm.value.editaddFlowers,
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
    this.getMisscall();
    $("#edit_Misscall").modal("hide");
    this.editMisscallForm.reset();
    this.toastr.success("Misscall updated", "Success");
  }

  edit(value) {
    this.editId = value;
    const index = this.allMisscall.findIndex((item) => {
      return item.id === value;
    });
    let toSetValues = this.allMisscall[index];
    this.editMisscallForm.setValue({
      editMisscallubject: toSetValues.Misscallubject,
      editMisscallId: toSetValues.MisscallId,
      editAssignStaff: toSetValues.assignedStaff,
      editClientName: toSetValues.client,
      editPriorityName: toSetValues.priority,
      editccName: toSetValues.cc,
      editAssignName: toSetValues.assigne,
      editaddFlowers: toSetValues.addfollow,
    });
  }

  // Delete Misscall Modal Api Call
  deleteMisscall() {
    this.allModuleService.delete(this.tempId, this.url).subscribe((data) => {
      $("#datatable").DataTable().clear();
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
      });
      this.dtTrigger.next();
    });
    this.getMisscall();
    $("#delete_Misscall").modal("hide");
    this.toastr.success("Misscall deleted", "Success");
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
