import {Injectable} from "@angular/core";


export interface Locale {
    format?: string;
    applyLabel?: string;
    customRangeLabel?: string;
    cancelLabel?: string;
    daysOfWeek?: Array<string>;
    monthNames?: Array<string>;
    firstDay?: number;
}

@Injectable()
export class DatepickerConfig {

    jqueryPath?: string = '';
    momentPath?: string = '';
    datepickerPath?: string = '';
    singleDatePicker?: boolean = false;
    timePicker?: boolean = true;
    timePickerIncrement?: number = 1;
    showDropdowns?: boolean = true;
    timePickerSeconds?: boolean = true;
    timePicker24Hour?: boolean = true;
    autoUpdateInput?: boolean = true;
    showCustomRangeLabel?: boolean = false;
    alwaysShowCalendars?: boolean = true;
    opens?: string = "right";
    showYear?: boolean = true;
    locale?: Locale = {
        format: 'YYYY-MM-DD HH:mm:ss',
        applyLabel: '确定',
        customRangeLabel: "自定义",
        cancelLabel: '清空',
        daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
        monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        firstDay: 1
    };
    ranges?: Object;
    startDate?: string;
    endDate?: string;
    unDeepCopy?: boolean = false;

    constructor() {
        console.log('init DatepickerConfig');
    }

}
