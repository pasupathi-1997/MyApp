import { RouterModule,Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DisplayComponent } from './component/display/display.component';
import { AccountComponent } from './component/accounts/account/account.component';
import { CustomeraccountComponent } from './component/accounts/customeraccount/customeraccount.component';
import { EditcustomerComponent } from './component/accounts/customeraccount/editcustomer/editcustomer.component';
import { ManageraccountComponent } from './component/accounts/manageraccount/manageraccount.component';
import { EditmanagerComponent } from './component/accounts/manageraccount/editmanager/editmanager.component';
import { ViewmanagerComponent } from './component/accounts/manageraccount/viewmanager/viewmanager.component';
import { AddcustomerComponent } from './component/accounts/manageraccount/viewmanager/addcustomer/addcustomer.component';
import { EditdiscountComponent } from './component/accounts/manageraccount/viewmanager/editdiscount/editdiscount.component';
import { StoreaccountComponent } from './component/accounts/storeaccount/storeaccount.component';
import { EditstoreComponent } from './component/accounts/storeaccount/editstore/editstore.component';
import { ViewstoreComponent } from './component/accounts/storeaccount/viewstore/viewstore.component';
import { NewaccountComponent } from './component/accounts/account/newaccount/newaccount.component';
import { NewcustomerComponent } from './component/accounts/customeraccount/newcustomer/newcustomer.component';
import { AddstoreComponent } from './component/accounts/storeaccount/viewstore/addstore/addstore.component';
import { TechnicianComponent } from './component/accounts/technician/technician.component';
import { WorkshopaccountComponent } from './component/accounts/workshopaccount/workshopaccount.component';
import { NewmanagerComponent } from './component/accounts/manageraccount/newmanager/newmanager.component';
import { AddtechnicianComponent } from './component/accounts/technician/addtechnician/addtechnician.component';
import { EdittechnicianComponent } from './component/accounts/technician/edittechnician/edittechnician.component';
import { AddworkshopComponent } from './component/accounts/workshopaccount/addworkshop/addworkshop.component';
import { EditworkshopComponent } from './component/accounts/workshopaccount/editworkshop/editworkshop.component';
import { InvoiceComponent } from './component/billings/createdbill/invoice/invoice.component';
import { ManageComponent } from './component/billings/createdbill/manage/manage.component';
import { AddinvoiceComponent } from './component/billings/createdbill/invoice/addinvoice/addinvoice.component';
import { AddbillComponent } from './component/billings/createdbill/manage/addbill/addbill.component';
import { PastorderComponent } from './component/billings/order/pastorder/pastorder.component';
import { PendingorderComponent } from './component/billings/order/pendingorder/pendingorder.component';
import { NeworderComponent } from './component/billings/order/pastorder/neworder/neworder.component';
import { PartapprovalComponent } from './component/billings/partapproval/partapproval.component';
import { TransactionComponent } from './component/billings/transaction/transaction.component';
import { HistoryComponent } from './component/billings/partapproval/history/history.component';
import { AddtransactionComponent } from './component/billings/transaction/addtransaction/addtransaction.component';
import { CustomerdiscountComponent } from './component/discounts/customerdiscount/customerdiscount.component';
import { AddcusdisComponent } from './component/discounts/customerdiscount/addcusdis/addcusdis.component';
import { EditcusdisComponent } from './component/discounts/customerdiscount/editcusdis/editcusdis.component';
import { DiscountComponent } from './component/discounts/discount/discount.component';
import { AdddiscountComponent } from './component/discounts/discount/adddiscount/adddiscount.component';
import { EditdisComponent } from './component/discounts/discount/editdis/editdis.component';
import { PartdiscountComponent } from './component/discounts/partdiscount/partdiscount.component';
import { AddpartdisComponent } from './component/discounts/partdiscount/addpartdis/addpartdis.component';
import { EditpartdisComponent } from './component/discounts/partdiscount/editpartdis/editpartdis.component';
import { PartgroupComponent } from './component/discounts/partgroup/partgroup.component';
import { AddpartgroupComponent } from './component/discounts/partgroup/addpartgroup/addpartgroup.component';
import { EditpartgroupComponent } from './component/discounts/partgroup/editpartgroup/editpartgroup.component';
import { FuellogComponent } from './component/maintenance/fuellog/fuellog.component';
import { VehiclealertComponent } from './component/maintenance/vehiclealert/vehiclealert.component';
import { AddfuellogComponent } from './component/maintenance/fuellog/addfuellog/addfuellog.component';
import { EditfuellogComponent } from './component/maintenance/fuellog/editfuellog/editfuellog.component';
import { ReportfuellogComponent } from './component/maintenance/fuellog/reportfuellog/reportfuellog.component';
import { MaintenalertComponent } from './component/maintenance/vehiclealert/maintenalert/maintenalert.component';
import { BranchesComponent } from './component/masters/branches/branches.component';
import { AddbranchComponent } from './component/masters/branches/addbranch/addbranch.component';
import { PurchaseorderComponent } from './component/purchase/purchaseorder/purchaseorder.component';
import { AddpurchaseorderComponent } from './component/purchase/purchaseorder/addpurchaseorder/addpurchaseorder.component';
import { TyrealertComponent } from './component/maintenance/vehiclealert/tyrealert/tyrealert.component';
import { BatteryalertComponent } from './component/maintenance/vehiclealert/batteryalert/batteryalert.component';
import { AdminalertComponent } from './component/maintenance/vehiclealert/adminalert/adminalert.component';
import { AttentionComponent } from './component/maintenance/vehiclealert/attention/attention.component';
import { CheckupComponent } from './component/masters/checkup/checkup.component';
import { NewcheckupComponent } from './component/masters/checkup/newcheckup/newcheckup.component';
import { AddcheckupComponent } from './component/masters/checkup/addcheckup/addcheckup.component';
import { ViewcheckupComponent } from './component/masters/checkup/viewcheckup/viewcheckup.component';
import { EditcheckupComponent } from './component/masters/checkup/viewcheckup/editcheckup/editcheckup.component';
import { GrnComponent } from './component/purchase/grn/grn.component';
import { StockComponent } from './component/purchase/stock/stock.component';
import { CustomerlistComponent } from './component/masters/customerlist/customerlist.component';
import { PackageComponent } from './component/masters/package/package.component';
import { AddpackageComponent } from './component/masters/package/addpackage/addpackage.component';
import { EditpackageComponent } from './component/masters/package/editpackage/editpackage.component';
import { ViewpackageComponent } from './component/masters/package/viewpackage/viewpackage.component';
import { NewserviceComponent } from './component/masters/package/viewpackage/newservice/newservice.component';
import { VendorComponent } from './component/masters/vendor/vendor.component';
import { NewvendorComponent } from './component/masters/vendor/newvendor/newvendor.component';
import { PartsComponent } from './component/masters/parts/parts.component';
import { NewpartComponent } from './component/masters/parts/newpart/newpart.component';
import { EditpartComponent } from './component/masters/parts/editpart/editpart.component';
import { FuellogreportComponent } from './component/reports/fuellogreport/fuellogreport.component';
import { ReportComponent } from './component/reports/report/report.component';
import { AddlogreportComponent } from './component/reports/fuellogreport/addlogreport/addlogreport.component';
import { ReportaddComponent } from './component/reports/fuellogreport/reportadd/reportadd.component';
import { RotComponent } from './component/masters/rot/rot.component';
import { AddrotComponent } from './component/masters/rot/addrot/addrot.component';
import { EditrotComponent } from './component/masters/rot/editrot/editrot.component';
import { AddreportsComponent } from './component/reports/report/addreports/addreports.component';
import { AutogenComponent } from './component/reports/report/autogen/autogen.component';
import { ServiceComponent } from './component/masters/service/service.component';
import { AddserviceComponent } from './component/masters/service/addservice/addservice.component';
import { EditserviceComponent } from './component/masters/service/editservice/editservice.component';
import { StoreaddComponent } from './component/accounts/storeaccount/storeadd/storeadd.component';
import { EdittransactionComponent } from './component/billings/transaction/edittransaction/edittransaction.component';
import { TyremakesComponent } from './component/masters/tyremakes/tyremakes.component';
import { AddtyremakesComponent } from './component/masters/tyremakes/addtyremakes/addtyremakes.component';
import { EdittyremakesComponent } from './component/masters/tyremakes/edittyremakes/edittyremakes.component';
import { TyremodalComponent } from './component/masters/tyremodal/tyremodal.component';
import { AddtyremodalComponent } from './component/masters/tyremodal/addtyremodal/addtyremodal.component';
import { EdittyremodalComponent } from './component/masters/tyremodal/edittyremodal/edittyremodal.component';
import { UomComponent } from './component/masters/uom/uom.component';
import { AdduomComponent } from './component/masters/uom/adduom/adduom.component';
import { EdituomComponent } from './component/masters/uom/edituom/edituom.component';
import { EmployeeComponent } from './component/accounts/employee/employee.component';
import { NewemployeeComponent } from './component/accounts/employee/newemployee/newemployee.component';
import { EditemployeeComponent } from './component/accounts/employee/editemployee/editemployee.component';
import { EditaccountComponent } from './component/accounts/account/editaccount/editaccount.component';
import { NewcustomersComponent } from './component/accounts/customeraccount/newcustomers/newcustomers.component';
import { EditcustomersComponent } from './component/accounts/customeraccount/editcustomers/editcustomers.component';
import { AddstoresComponent } from './component/accounts/storeaccount/addstores/addstores.component';
import { EditstoresComponent } from './component/accounts/storeaccount/editstores/editstores.component';
import { EditmanagersComponent } from './component/accounts/manageraccount/editmanagers/editmanagers.component';
import { AddworkshopsComponent } from './component/accounts/workshopaccount/addworkshops/addworkshops.component';
import { EditworkshopsComponent } from './component/accounts/workshopaccount/editworkshops/editworkshops.component';
import { DeleteemployeeComponent } from './component/accounts/employee/deleteemployee/deleteemployee.component';
import { DeleteaccountComponent } from './component/accounts/account/deleteaccount/deleteaccount.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';


export const routes: Routes = [
{path:'register', component:RegisterComponent},
{path:'login', component:LoginComponent},
{path:'navbar', component:NavbarComponent},
{path:'sidebar', component:SidebarComponent},
{path:'dashboard', component:DashboardComponent},
{path:'display', component:DisplayComponent},
{path:'employee', component:EmployeeComponent},
{path:'employee/newemployee', component:NewemployeeComponent},
{path:'employee/editemployee/:id', component:EditemployeeComponent},
{path:'employee/deleteemployee', component:DeleteemployeeComponent},
{path:'account', component:AccountComponent},
{path:'account/newaccount', component:NewaccountComponent},
{path:'account/editaccount/:id', component:EditaccountComponent},
{path:'account/deleteaccount', component:DeleteaccountComponent},
{path:'customer', component: CustomeraccountComponent},
{path:'customer/newcustomer', component: NewcustomerComponent},
{path:'customer/newcustomers', component:NewcustomersComponent},
{path:'customer/editcustomers/:id', component:EditcustomersComponent},
{path:'customer/editcustomer', component: EditcustomerComponent},
{path:'manager', component:ManageraccountComponent},
{path:'manager/newmanager', component:NewmanagerComponent},
{path:'manager/editmanagers/:id', component:EditmanagersComponent},
{path:'manager/editmanager', component:EditmanagerComponent},
{path:'manager/viewmanager', component:ViewmanagerComponent},
{path:'viewmanager/addcustomer', component:AddcustomerComponent},
{path:'viewmanager/editdiscount', component:EditdiscountComponent},
{path:'store', component:StoreaccountComponent},
{path:'store/addstores', component:AddstoresComponent},
{path:'store/editstores/:id',component:EditstoresComponent},
{path:'store/storeadd', component:StoreaddComponent},
{path:'store/editstore', component:EditstoreComponent},
{path:'store/viewstore', component:ViewstoreComponent},
{path:'viewstore/addstore', component:AddstoreComponent},
{path:'technician', component:TechnicianComponent},
{path:'technician/addtechnician', component:AddtechnicianComponent},
{path:'technician/edittechnician/:id', component:EdittechnicianComponent},
{path:'workshop', component:WorkshopaccountComponent},
{path:'workshop/addworkshops', component:AddworkshopsComponent},
{path:'workshop/editworkshops/:id', component:EditworkshopsComponent},
{path:'workshop/addworkshop', component:AddworkshopComponent},
{path:'workshop/editworkshop', component:EditworkshopComponent},
{path:'invoice', component:InvoiceComponent},
{path:'invoice/addinvoice', component:AddinvoiceComponent},
{path:'manage', component:ManageComponent},
{path:'manage/addbill', component:AddbillComponent},
{path:'pastorder', component:PastorderComponent},
{path:'pastorder/neworder', component:NeworderComponent},
{path:'pendingorder', component:PendingorderComponent},
{path:'partapproval', component:PartapprovalComponent},
{path:'partapproval/history', component:HistoryComponent},
{path:'transaction', component:TransactionComponent},
{path:'transaction/addtransaction', component:AddtransactionComponent},
{path:'transaction/edittransaction', component:EdittransactionComponent},
{path:'customerdiscount', component:CustomerdiscountComponent},
{path:'customerdiscount/addcusdis', component:AddcusdisComponent},
{path:'customerdiscount/editcusdis', component:EditcusdisComponent},
{path:'discount', component:DiscountComponent},
{path:'discount/adddiscount', component:AdddiscountComponent},
{path:'discount/editdis', component:EditdisComponent},
{path:'partdiscount', component:PartdiscountComponent},
{path:'partdiscount/addpartdis', component:AddpartdisComponent},
{path:'partdiscount/editpartdis', component:EditpartdisComponent},
{path:'partgroup', component:PartgroupComponent},
{path:'partgroup/addpartgroup', component:AddpartgroupComponent},
{path:'partgroup/editpartgroup', component:EditpartgroupComponent},
{path:'fuellog', component:FuellogComponent},
{path:'fuellog/addfuellog', component:AddfuellogComponent},
{path:'fuellog/editfuellog', component:EditfuellogComponent},
{path:'fuellog/reportfuellog', component:ReportfuellogComponent},
{path:'vehiclealert',component:VehiclealertComponent},
{path:'vehiclealert/maintenalert', component:MaintenalertComponent},
{path:'vehiclealert/tyrealert', component:TyrealertComponent},
{path:'vehiclealert/batteryalert', component:BatteryalertComponent},
{path:'vehiclealert/adminalert', component:AdminalertComponent},
{path:'vehiclealert/attention', component:AttentionComponent},
{path:'branches',component:BranchesComponent},
{path:'branches/addbranch', component:AddbranchComponent},
{path:'checkup', component:CheckupComponent},
{path:'checkup/newcheckup', component:NewcheckupComponent},
{path:'checkup/addcheckup', component:AddcheckupComponent},
{path:'checkup/viewcheckup',component:ViewcheckupComponent},
{path:'viewcheckup/editcheckup', component:EditcheckupComponent},
{path:'customerlist', component:CustomerlistComponent},
{path:'package', component:PackageComponent},
{path:'package/addpackage', component:AddpackageComponent},
{path:'package/editpackage', component:EditpackageComponent},
{path:'package/viewpackage', component:ViewpackageComponent},
{path:'viewpackage/newservice', component:NewserviceComponent},
{path:'part', component:PartsComponent},
{path:'part/newpart', component:NewpartComponent},
{path:'part/editpart', component:EditpartComponent},
{path:'rot', component:RotComponent},
{path:'rot/addrot', component:AddrotComponent},
{path:'rot/editrot', component:EditrotComponent},
{path:'service', component:ServiceComponent},
{path:'service/addservice', component:AddserviceComponent},
{path:'service/editservice', component:EditserviceComponent},
{path:'tyremakes', component:TyremakesComponent},
{path:'tyremakes/addtyremakes', component:AddtyremakesComponent},
{path:'tyremakes/edittyremakes',component:EdittyremakesComponent},
{path:'tyremodal', component:TyremodalComponent},
{path:'tyremodal/addtyremodal', component:AddtyremodalComponent},
{path:'tyremodal/edittyremodal', component:EdittyremodalComponent},
{path:'uom', component:UomComponent},
{path:'uom/adduom', component:AdduomComponent},
{path:'uom/edituom', component:EdituomComponent},
{path:'vendor', component:VendorComponent},
{path:'vendor/newvendor', component:NewvendorComponent},
{path:'fuellogreports', component:FuellogreportComponent},
{path:'fuellogreports/addlogreport', component:AddlogreportComponent},
{path:'fuellogreports/reportadd', component:ReportaddComponent},
{path:'report', component:ReportComponent},
{path:'report/addreports', component:AddreportsComponent},
{path:'report/autogen', component:AutogenComponent},
{path:'purchaseorder', component:PurchaseorderComponent},
{path:'purchaseorder/addpurchaseorder', component:AddpurchaseorderComponent},
{path:'grn', component:GrnComponent},
{path:'stock', component:StockComponent}
];
// const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
