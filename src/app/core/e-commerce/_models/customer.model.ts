import { BaseModel } from '../../_base/crud';

export class CustomerModel  extends BaseModel {
	id: number;
	matricule:string;
	firstName: string;
	lastName: string;
	email: string;
	userName: string;
	gender: string;
	classeId : string ; 
	status: number; // 0 = Active | 1 = Suspended | Pending = 2
	dateNaissance: string;
	dob: Date;


	clear() {
		this.dob = new Date();
		this.matricule = '';
		this.firstName = '';
		this.classeId = '' ;
		this.lastName = '';
		this.email = '';
		this.userName = '';
		this.gender = 'Female';
		this.status = 1;
	}
}
