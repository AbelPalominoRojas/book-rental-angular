import Swal, { SweetAlertResult } from 'sweetalert2';

interface SwalOptions {
	title: string;
	html: string;
	customClass?: { confirmButton: string; cancelButton: string };
	buttonsStyling?: boolean;
	icon?: string;
	showCancelButton?: boolean;
	confirmButtonText?: string;
	cancelButtonText?: string;
}

const optionsAlert: SwalOptions = {
	title: 'BOOK RENTAL',
	html: 'Sistema de prestamo de libros',
	customClass: {
		confirmButton: 'mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base',
		cancelButton: 'mdc-button mdc-button--raised mat-mdc-raised-button mat-mdc-button-base',
	},
	buttonsStyling: false,
};

const extend = (...args: SwalOptions[]): {} => args.reduce((a, b) => Object.assign(a, b), {});

const swalAlertConfirm = async (message?: string, title?: string): Promise<SweetAlertResult> => {
	const selectOptions: SwalOptions = {
		title: title ?? optionsAlert.title,
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'confirmar',
		cancelButtonText: 'cancelar',
		html: message ?? optionsAlert.html,
	};

	const currentOptions = extend(optionsAlert, selectOptions);

	return await Swal.fire(currentOptions);
};

const swalAlertInfo = async (message?: string, title?: string): Promise<SweetAlertResult> => {
	const selectOptions: SwalOptions = {
		title: title ?? optionsAlert.title,
		icon: 'info',
		showCancelButton: false,
		confirmButtonText: 'Ok',
		html: message ?? optionsAlert.html,
	};

	const currentOptions = extend(optionsAlert, selectOptions);

	return await Swal.fire(currentOptions);
};

export { swalAlertConfirm, swalAlertInfo };
