import { InMemoryDbService } from "angular-in-memory-web-api";

export class AllModulesData implements InMemoryDbService {
  createDb() {
    // Apps Module Contacts Database

    let contacts = [
      {
        name: "Shubon",
        role: "Satcom_Admin",
        type: "Admin",
        number: "9863331541",
        email: "Satcom Admin",
        id: 121,
      },
      {
        name: "Tultul",
        role: "Satcom_Admin",
        type: "Admin",
        number: "9863331542",
        email: "Satcom Admin",
        id: 122,
      },
      {
        name: "Bhargav Chakravarty",
        role: "Celebration",
        type: "Celebration",
        number: "9863331546",
        email: "Celebration",
        id: 124,
      },
      {
        name: "Kishan",
        role: "Satcom_Admin",
        type: "Solver",
        number: "9863331547",
        email: "Satcom Admin",
        id: 125,
      },
      {
        name: "Ritam",
        role: "Accomodation",
        type: "Satcom",
        number: "9863331548",
        email: "Accomodation",
        id: 126,
      },
      {
        name: "Bablu Dash",
        role: "Philanthropy",
        type: "Solver",
        number: "9863331542",
        email: "Philanthropy",
        id: 127,
      },
      {
        name: "Bhargo",
        role: "Satcom_Admin",
        type: "Admin",
        number: "9863331543",
        email: "Satcom Admin",
        id: 128,
      },
      {
        name: "Sandip",
        role: "Education",
        type: "Solver",
        number: "9863331548",
        email: "Education",
        id: 129,
      },
    ];

    let holidays = [
      {
        id: 1,
        title: "New Year",
        holidaydate: "01-01-2023",
        day: "sun day",
      },
      {
        id: 2,
        title: "Diwali",
        holidaydate: "28-02-2023",
        day: "Thursday ",
      },
      {
        id: 3,
        title: "Christmas",
        holidaydate: "28-02-2023",
        day: "Friday",
      },
      {
        id: 4,
        title: "Ramzon",
        holidaydate: "17-02-2023",
        day: "sun day",
      },
      {
        id: 5,
        title: "Bakrid",
        holidaydate: "15-09-2023",
        day: "Saturday",
      },
    ];



    let nibassign = [
      {
        NibedonId: "NIB1234",
        nibassignSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 1,
      },
      {
        NibedonId: "NIB1234",
        NIBSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 2,
      },
      {
        NibedonId: "NIB1234",
        NIBSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 3,
      },
      {
        NibedonId: "NIB1234",
        NIBSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 4,
      },
    ];

    let Responsepending = [
      {
        NibedonId: "NIB1234",
        nibassignSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 1,
      },
      {
        NibedonId: "NIB1234",
        NIBSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 2,
      },
      {
        NibedonId: "NIB1234",
        NIBSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 3,
      },
      {
        NibedonId: "NIB1234",
        NIBSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 4,
      },
    ];

    let Callerid = [
      {
        NibedonId: "NIB1234",
        nibassignSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 1,
      },
      {
        NibedonId: "NIB1234",
        NIBSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 2,
      },
      {
        NibedonId: "NIB1234",
        NIBSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 3,
      },
      {
        NibedonId: "NIB1234",
        NIBSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 4,
      },
    ];

    let Gnibc = [
      {
        NibedonId: "NIB1234",
        nibassignSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 1,
      },
      {
        NibedonId: "NIB1234",
        NIBSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 2,
      },
      {
        NibedonId: "NIB1234",
        NIBSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 3,
      },
      {
        NibedonId: "NIB1234",
        NIBSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 4,
      },
    ];

    let Livecalls = [
      {
        NibedonId: "NIB1234",
        nibassignSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 1,
      },
      {
        NibedonId: "NIB1234",
        NIBSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 2,
      },
      {
        NibedonId: "NIB1234",
        NIBSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 3,
      },
      {
        NibedonId: "NIB1234",
        NIBSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 4,
      },
    ];

    let Solver = [
      {
        NibedonId: "NIB1234",
        nibassignSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 1,
      },
      {
        NibedonId: "NIB1234",
        NIBSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 2,
      },
      {
        NibedonId: "NIB1234",
        NIBSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 3,
      },
      {
        NibedonId: "NIB1234",
        NIBSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 4,
      },
    ];

    let Misscall = [
      {
        NibedonId: "NIB1234",
        nibassignSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 1,
      },
      {
        NibedonId: "NIB1234",
        NIBSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 2,
      },
      {
        NibedonId: "NIB1234",
        NIBSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 3,
      },
      {
        NibedonId: "NIB1234",
        NIBSubject: "Celebration",
        assignedSolver: "Bhargav Chakravarty",

        priority: "High",
        cc: "Shubon",
        assigne: "Tultul",

        description: "Needs guidance on the Celebration Nibedon",
        createdDate: "18-01-2023",
        lastReply: "17-01-2023",
        status: "Pending",
        id: 4,
      },
    ];




    let assets = [
      {
        assetUser: "Tultul",
        assetName: "Dell Laptop",
        assetId: "#AST-0001",
        assetStatus: "Pending",
        purchaseDate: "05-01-2023",
        warrenty: "12 Months",
        warrentyEnd: "05-01-2023",
        Amount: "$1215",
        id: 1,
      },
      {
        assetUser: "Shubon",
        assetName: "Seagate Harddisk",
        assetId: "#AST-0002",
        assetStatus: "Pending",
        purchaseDate: "14-01-2023",
        warrenty: "12 Months",
        warrentyEnd: "14-07-2023",
        Amount: "$300",
        id: 2,
      },
      {
        assetUser: "Bhargav Chakravarty",
        assetName: "Canon Portable Printer",
        assetId: "#AST-0003",
        assetStatus: "Pending",
        purchaseDate: "14-01-2023",
        warrenty: "12 Months",
        warrentyEnd: "14-08-2023",
        Amount: "$2500",
        id: 3,
      },
      {
        assetUser: "Kishan",
        assetName: "Dell Laptop",
        assetId: "#AST-0004",
        assetStatus: "Pending",
        purchaseDate: "05-01-2023",
        warrenty: "12 Months",
        warrentyEnd: "05-01-2023",
        Amount: "$1215",
        id: 4,
      },
      {
        assetUser: "Ritam",
        assetName: "Seagate Harddisk",
        assetId: "#AST-0005",
        assetStatus: "Pending",
        purchaseDate: "14-01-2023",
        warrenty: "12 Months",
        warrentyEnd: "14-01-2023",
        Amount: "$300",
        id: 5,
      },
      {
        assetUser: "Bablu Dash",
        assetName: "Canon Portable Printer",
        assetId: "#AST-0006",
        assetStatus: "Pending",
        purchaseDate: "14-01-2023",
        warrenty: "12 Months",
        warrentyEnd: "14-01-2023",
        Amount: "$2500",
        id: 6,
      },
      {
        assetUser: "Bernardo Galaviz",
        assetName: "Dell Laptop",
        assetId: "#AST-0007",
        assetStatus: "Pending",
        purchaseDate: "05-01-2023",
        warrenty: "12 Months",
        warrentyEnd: "05-02-2023",
        Amount: "$1215",
        id: 7,
      },
      {
        assetUser: "Sandip",
        assetName: "Seagate Harddisk",
        assetId: "#AST-0008",
        assetStatus: "Pending",
        purchaseDate: "14-01-2023",
        warrenty: "12 Months",
        warrentyEnd: "14-01-2023",
        Amount: "$300",
        id: 8,
      },
      {
        assetUser: "Admin",
        assetName: "Canon Portable Printer",
        assetId: "#AST-0009",
        assetStatus: "Pending",
        purchaseDate: "14-01-2023",
        warrenty: "12 Months",
        warrentyEnd: "14-01-2023",
        Amount: "$2500",
        id: 9,
      },
      {
        assetUser: "Bhargo",
        assetName: "Dell Laptop",
        assetId: "#AST-0010",
        assetStatus: "Pending",
        purchaseDate: "05-01-2023",
        warrenty: "12 Months",
        warrentyEnd: "05-01-2023",
        Amount: "$1215",
        id: 10,
      },
    ];



    let roles = [
      {
        roleName: "MisscallID",
        id: 1,
      },
      {
        roleName: "CallerID",
        id: 2,
      },
      {
        roleName: "SolverID",
        id: 3,
      },
      {
        roleName: "Admin",
        id: 4,
      },
      {
        roleName: "Satcom1",
        id: 5,
      },
      {
        roleName: "Satcom_Admin",
        id: 6,
      },
      {
        roleName: "Admin",
        id: 7,
      },
      {
        roleName: "Satcom2",
        id: 8,
      },
      {
        roleName: "UI/UX Developer",
        id: 9,
      },
      {
        roleName: "SEO Analyst",
        id: 10,
      },
    ];


    let manage = [
      {
        id: 1,
        name1: "Shubon",
        name2: "Admin",
        jobtitle: "Satcom_Admin",
        department: "Admin",
        startdate: "3 Mar 2023",
        expiredate: "31 May 2023",
        jobtype: "Satcom",
        status: "Open",

      },
      {
        id: 2,
        name1: "Tultul",
        name2: "Satcom_Admin",
        jobtitle: "Admin",
        department: "Admin",
        startdate: "3 Mar 2023",
        expiredate: "31 May 2023",
        jobtype: "Satcom",
        status: "Closed",

      },
      {
        id: 3,
        name1: "Bhargav Chakravarty",
        name2: "Education",
        jobtitle: "Education",
        department: "Satcom1",
        startdate: "3 Mar 2023",
        expiredate: "31 May 2023",
        jobtype: "Satcom",
        status: "Closed",

      }
    ];


    return {

      contacts: contacts,
      holidays: holidays,
      nibassign:nibassign,
      Responsepending:Responsepending,
      Callerid:Callerid,
      Solver:Solver,
      Livecalls:Livecalls,
      Misscall:Misscall,
      Gnibc:Gnibc,
      assets: assets,
      roles: roles,
      manage: manage,









    };
  }
}
