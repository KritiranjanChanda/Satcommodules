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
  selector: "app-Solver-content",
  templateUrl: "./Solver-content.component.html",
  styleUrls: ["./Solver-content.component.css"],
})
export class SolverContentComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  public url: any = "Solver";
  public allSolver: any = [];
  public addSolverForm: FormGroup;
  public editSolverForm: FormGroup;
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

    this.getSolver();
    // Add Solver Form Validation And Getting Values
    this.addSolverForm = this.formBuilder.group({
      Solverubject: ["", [Validators.required]],
      SolverId: ["", [Validators.required]],
      assignStaff: ["", [Validators.required]],
      clientName: ["", [Validators.required]],
      PriorityName: ["", [Validators.required]],
      ccName: ["", [Validators.required]],
      AssignName: ["", [Validators.required]],
      addFlowers: ["", [Validators.required]],
    });

    // Edit Solver Form Validation And Getting Values

    this.editSolverForm = this.formBuilder.group({
      editSolverubject: ["", [Validators.required]],
      editSolverId: ["", [Validators.required]],
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
    this.allSolver = [];
    this.getSolver();
    setTimeout(() => {
      this.dtTrigger.next();
    }, 1000);
  }

  getSolver() {
    this.allModuleService.get(this.url).subscribe((data) => {
      this.allSolver = data;
      this.rows = this.allSolver;
      this.srch = [...this.rows];
    });
  }

  // Add Solver Modal Api Call

  addSolver() {
    if (this.addSolverForm.valid) {
      // let created = this.pipe.transform(
      //   "12-05-2020",
      //   "dd-MM-yyyy"
      // );
      // let lastDate = this.pipe.transform(
      //   "13-05-2020",
      //   "dd-MM-yyyy"
      // );
      let obj = {
        Solverubject: this.addSolverForm.value.Solverubject,
        SolverId: this.addSolverForm.value.SolverId,
        assignedStaff: this.addSolverForm.value.assignStaff,
        client: this.addSolverForm.value.clientName,
        cc: this.addSolverForm.value.ccName,
        priority: this.addSolverForm.value.PriorityName,
        assigne: this.addSolverForm.value.AssignName,
        addfollow: this.addSolverForm.value.addFlowers,
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
      this.getSolver();
      $("#add_Solver").modal("hide");
      this.addSolverForm.reset();
      this.toastr.success("Solver added", "Success");
    } else {
      this.toastr.warning("Mandatory fields required", "");
    }
  }

  // Edit Solver Modal Api Call

  editSolver() {
    let obj = {
      Solverubject: this.editSolverForm.value.editSolverubject,
      SolverId: this.editSolverForm.value.editSolverId,
      assignedStaff: this.editSolverForm.value.editAssignStaff,
      client: this.editSolverForm.value.editClientName,
      cc: this.editSolverForm.value.editccName,
      priority: this.editSolverForm.value.editPriorityName,
      assigne: this.editSolverForm.value.editAssignName,
      addfollow: this.editSolverForm.value.editaddFlowers,
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
    this.getSolver();
    $("#edit_Solver").modal("hide");
    this.editSolverForm.reset();
    this.toastr.success("Solver updated", "Success");
  }

  edit(value) {
    this.editId = value;
    const index = this.allSolver.findIndex((item) => {
      return item.id === value;
    });
    let toSetValues = this.allSolver[index];
    this.editSolverForm.setValue({
      editSolverubject: toSetValues.Solverubject,
      editSolverId: toSetValues.SolverId,
      editAssignStaff: toSetValues.assignedStaff,
      editClientName: toSetValues.client,
      editPriorityName: toSetValues.priority,
      editccName: toSetValues.cc,
      editAssignName: toSetValues.assigne,
      editaddFlowers: toSetValues.addfollow,
    });
  }

  // Delete Solver Modal Api Call
  deleteSolver() {
    this.allModuleService.delete(this.tempId, this.url).subscribe((data) => {
      $("#datatable").DataTable().clear();
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
      });
      this.dtTrigger.next();
    });
    this.getSolver();
    $("#delete_Solver").modal("hide");
    this.toastr.success("Solver deleted", "Success");
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
