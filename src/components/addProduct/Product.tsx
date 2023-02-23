import React, { useState, useRef, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import Editors from '../editor/Editors';
import CheckBox from '../UI/checkBox/CheckBox';
import classes from "./Product.module.scss";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Button from '../UI/button/Button';
import SelectDropDown from '../UI/selectDropDown/SelectDropDown';
import Multiselect from 'multiselect-react-dropdown';

const Product = () => {
    const { t } = useTranslation()
    const [showTime, setShowTime] = useState(false)
    const [showPrice, setShowPrice] = useState("")
    const [file, setFile] = useState<File>();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleUploadClick = () => {
        // 👇 We redirect the click event onto the hidden input element
        inputRef.current?.click();

    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }

        setFile(e.target.files[0]);

        // 🚩 do the file upload here normally...
    };

    const optionList = ["digital", "clothing", "beauty"]

    return (
        <div>
            <div>
                <label htmlFor="product-title" className={classes.title}>عنوان محصول</label>
                <input id="product-title" type='text' className={classes.input_title} />
            </div>
            <div style={{ marginBottom: "20px" }}>
                <Editors />
            </div>
            <div className={classes.productInfo}>
                <div className={classes.productInfo__rightSide}>
                    <div>
                        <label htmlFor="id" className={classes.title}>شناسه کالا</label>
                        <input id="id" type='text' className={classes.input_title} />
                    </div>
                    <div>
                        <label htmlFor="inventory" className={classes.title}>موجودی انبار</label>
                        <input placeholder="در صورت عدم موجودی، این فیلد را خالی بگذارید" id="inventory" type='number' className={classes.input_title} />
                    </div>
                    <div>
                        <label htmlFor="price" className={classes.title}>قیمت عادی محصول</label>
                        <input placeholder="بر حسب تومان وارد کنید" id="price" type='number' className={classes.input_title} />
                    </div>
                    <div>
                        <label htmlFor="priceDiscount" className={classes.title}>قیمت فروش فوق العاده محصول <a onClick={() => setShowTime(showTime => !showTime)} className={classes.time}>زمان بندی فروش</a></label>
                        <input placeholder="بر حسب تومان وارد کنید" id="priceDiscount" type='number' className={classes.input_title} />
                    </div>
                    <div>
                        {showTime &&
                            <>
                                <div style={{ marginBottom: "20px" }}>
                                    <label style={{ display: "block", marginBottom: "20px" }} className={classes.title}>تاریخ قیمت فروش فوق‌العاده</label>
                                    <div className={classes.datePicker}>
                                        <DatePicker
                                            inputClass={classes.input}
                                            calendar={persian}
                                            locale={persian_fa}
                                            placeholder="از تاریخ"
                                            format="YYYY-MM-DD HH:mm:ss"
                                        />
                                        <DatePicker
                                            inputClass={classes.input}
                                            calendar={persian}
                                            locale={persian_fa}
                                            placeholder="تا تاریخ"
                                            format="YYYY-MM-DD HH:mm:ss"
                                        />
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                    <label className={classes.title}>تنظیمات حمل و نقل</label>
                    <form>
                        <div className={classes.radiobtn}>
                            <input type="radio" id="huey" onChange={(e) => setShowPrice(e.target.value)}
                                name="drone" value="huey" />
                            <label htmlFor="huey">حمل و نقل رایگان
                            </label>
                        </div>

                        <div className={classes.radiobtn}>
                            <input type="radio" id="dewey" onChange={(e) => setShowPrice(e.target.value)}
                                name="drone" value="dewey" />
                            <label htmlFor="dewey">کرایه ثابت
                            </label>
                            {showPrice === "dewey" ? <input placeholder="بر حسب تومان وارد کنید" type='number' className={classes.input_title} /> : ""
                            }
                        </div>

                    </form>
                  
                    <div style={{ marginBottom: "25px", marginTop: "20px", display: "flex" }}>
                        <h3 style={{ display: "inline" }}>امکان بازگشت کالا</h3>
                        <CheckBox contentInActive="inactive" contentActive="active" />
                    </div>
                </div>
                <div className={classes.productInfo__leftSide}>
                    <label className={classes.title}>تصاویر کالا</label>

                    <div className={classes.picture}>

                        <div>
                            <input
                                type="file"
                                ref={inputRef}
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                            />
                            {!file ? <Icon className={classes.picture__icon} icon="icon-park-outline:add-picture" width="128" height="128" /> : <img className={classes.picture__img} src={file} />
                            }

                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ fontSize: "14px", margin: "20px -10px 0 120px" }}>اندازه تصاویر زیر ۵۱۲*۵۱۲ نباشد</span>
                            <Link style={{ width: "200px", border: "none", backgroundColor: "transparent", }} to="#">
                                <Button onClick={handleUploadClick}>آپلود تصویر</Button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <label className={classes.title}>دسته بندی محصول</label>
                        <div className={classes.multiselect}>
                            <Multiselect
                                isObject={false}
                                options={optionList}
                                placeholder={false}
                                emptyRecordMsg={t("emptyRecordMsg")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;