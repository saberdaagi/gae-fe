import { BaseModel } from '../../_base/crud';
import { ProductSpecificationModel } from './product-specification.model';
import { ProductRemarkModel } from './product-remark.model';

export class ProductModel extends BaseModel {
	id: number;
	
	nomComplet: string ; 
	label: string;
	_specs: ProductSpecificationModel[];
	_remarks: ProductRemarkModel[];

	clear() {
		
		this.nomComplet='';
		this.label='';
	}
}
