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
  selector: "app-Gnibc-content",
  templateUrl: "./Gnibc-content.component.html",
  styleUrls: ["./Gnibc-content.component.css"],
})
export class GnibcContentComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  public url: any = "Gnibc";
  public allGnibc: any = [];
  public addGnibcForm: FormGroup;
  public editGnibcForm: FormGroup;
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

    this.getGnibc();
    // Add Gnibc Form Validation And Getting Values
    this.addGnibcForm = this.formBuilder.group({
      Gnibcubject: ["", [Validators.required]],
      GnibcId: ["", [Validators.required]],
      assignStaff: ["", [Validators.required]],
      clientName: ["", [Validators.required]],
      PriorityName: ["", [Validators.required]],
      ccName: ["", [Validators.required]],
      AssignName: ["", [Validators.required]],
      addFlowers: ["", [Validators.required]],
    });

    // Edit Gnibc Form Validation And Getting Values

    this.editGnibcForm = this.formBuilder.group({
      editGnibcubject: ["", [Validators.required]],
      editGnibcId: ["", [Validators.required]],
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
    this.allGnibc = [];
    this.getGnibc();
    setTimeout(() => {
      this.dtTrigger.next();
    }, 1000);
  }

  getGnibc() {
    this.allModuleService.get(this.url).subscribe((data) => {
      this.allGnibc = data;
      this.rows = this.allGnibc;
      this.srch = [...this.rows];
    });
  }

  // Add Gnibc Modal Api Call

  addGnibc() {
    if (this.addGnibcForm.valid) {
      // let created = this.pipe.transform(
      //   "12-05-2020",
      //   "dd-MM-yyyy"
      // );
      // let lastDate = this.pipe.transform(
      //   "13-05-2020",
      //   "dd-MM-yyyy"
      // );
      let obj = {
        Gnibcubject: this.addGnibcForm.value.Gnibcubject,
        GnibcId: this.addGnibcForm.value.GnibcId,
        assignedStaff: this.addGnibcForm.value.assignStaff,
        client: this.addGnibcForm.value.clientName,
        cc: this.addGnibcForm.value.ccName,
        priority: this.addGnibcForm.value.PriorityName,
        assigne: this.addGnibcForm.value.AssignName,
        addfollow: this.addGnibcForm.value.addFlowers,
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
      this.getGnibc();
      $("#add_Gnibc").modal("hide");
      this.addGnibcForm.reset();
      this.toastr.success("Gnibc added", "Success");
    } else {
      this.toastr.warning("Mandatory fields required", "");
    }
  }

  // Edit Gnibc Modal Api Call

  editGnibc() {
    let obj = {
      Gnibcubject: this.editGnibcForm.value.editGnibcubject,
      GnibcId: this.editGnibcForm.value.editGnibcId,
      assignedStaff: this.editGnibcForm.value.editAssignStaff,
      client: this.editGnibcForm.value.editClientName,
      cc: this.editGnibcForm.value.editccName,
      priority: this.editGnibcForm.value.editPriorityName,
      assigne: this.editGnibcForm.value.editAssignName,
      addfollow: this.editGnibcForm.value.editaddFlowers,
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
    this.getGnibc();
    $("#edit_Gnibc").modal("hide");
    this.editGnibcForm.reset();
    this.toastr.success("Gnibc updated", "Success");
  }

  edit(value) {
    this.editId = value;
    const index = this.allGnibc.findIndex((item) => {
      return item.id === value;
    });
    let toSetValues = this.allGnibc[index];
    this.editGnibcForm.setValue({
      editGnibcubject: toSetValues.Gnibcubject,
      editGnibcId: toSetValues.GnibcId,
      editAssignStaff: toSetValues.assignedStaff,
      editClientName: toSetValues.client,
      editPriorityName: toSetValues.priority,
      editccName: toSetValues.cc,
      editAssignName: toSetValues.assigne,
      editaddFlowers: toSetValues.addfollow,
    });
  }

  // Delete Gnibc Modal Api Call
  deleteGnibc() {
    this.allModuleService.delete(this.tempId, this.url).subscribe((data) => {
      $("#datatable").DataTable().clear();
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
      });
      this.dtTrigger.next();
    });
    this.getGnibc();
    $("#delete_Gnibc").modal("hide");
    this.toastr.success("Gnibc deleted", "Success");
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
