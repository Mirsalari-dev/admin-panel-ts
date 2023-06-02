import React, { useState, useRef, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IProductsTable as Props } from "../../../interfaces/Itable";
import classes from "./EditProduct.module.scss";
import { Icon } from "@iconify/react";
import Button from "../../UI/button/Button";
import CheckBox from "../../UI/checkBox/CheckBox";
import Multiselect from "multiselect-react-dropdown";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Editors from "../../editor/Editors";
import { updateProduct } from "../../../redux/productsSlice";
import { useAppDispatch } from "../../../redux/hooks";

const EditProduct: React.FC<{ product?: Props }> = (props) => {
  const { t } = useTranslation();
  const [showTime, setShowTime] = useState(false);
  const [showPrice, setShowPrice] = useState("");

  const dispatch = useAppDispatch();
  const router = useNavigate();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [productInfoUpldate, setProductInfoUpldate] = useState({
    id: props.product?.ID,
    category: props.product?.category,
    price: props.product?.price,
    inventory: props.product?.inventory,
    product: props.product?.product,
    pic: props.product?.pic,
  });

  const handleUploadClick = () => {
    // 👇 We redirect the click event onto the hidden input element
    inputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    setProductInfoUpldate({
      ...productInfoUpldate,
      pic: e.target.files[0],
    });

    // 🚩 do the file upload here normally...
  };

  const optionList = ["digital", "clothing", "beauty"];

  const handleSelect = (selectedList: any) => {
    setProductInfoUpldate({
      ...productInfoUpldate,
      category: selectedList.map((optionList: any) => optionList),
    });
  };

  const onChangeHandler = (e: any) => {
    setProductInfoUpldate({
      ...productInfoUpldate,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <div className={classes.header}>
          <label htmlFor="product-title" className={classes.title}>
            {t("Producttitle")}
          </label>
          <div className={classes.buttons}>
            <Link
              style={{ border: "none", backgroundColor: "transparent" }}
              to="#"
            >
              <Button outline cls>
                {t("draft")}
              </Button>
            </Link>
            <Button
              onClick={() => {
                dispatch(updateProduct(productInfoUpldate));
                router("/products");
              }}
              type="submit"
            >
              {t("upload")}
            </Button>
          </div>
        </div>
        <input
          placeholder={t("EPT")}
          id="product"
          type="text"
          className={classes.input_title}
          value={productInfoUpldate.product}
          onChange={onChangeHandler}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Editors />
      </div>
      <div className={classes.productInfo}>
        <div className={classes.productInfo__rightSide}>
          <div>
            <label htmlFor="id" className={classes.title}>
              {t("ProductID")}
            </label>
            <input
              id="id"
              type="text"
              className={classes.input_title}
              value={props.product?.ID}
            />
          </div>
          <div>
            <label htmlFor="inventory" className={classes.title}>
              {t("inventory")}
            </label>
            <input
              placeholder={t("LeaveBlank")}
              id="inventory"
              type="number"
              className={classes.input_title}
              value={productInfoUpldate.inventory}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="price" className={classes.title}>
              {t("nProductP")}
            </label>
            <input
              placeholder={t("enterToman")}
              id="price"
              className={classes.input_title}
              value={productInfoUpldate.price}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="priceDiscount" className={classes.title}>
              {t("GreatSellingPrice")}
              <a
                onClick={() => setShowTime((showTime) => !showTime)}
                className={classes.time}
              >
                {t("Salestiming")}
              </a>
            </label>
            <input
              placeholder={t("enterToman")}
              id="priceDiscount"
              type="number"
              className={classes.input_title}
            />
          </div>
          <div>
            {showTime && (
              <>
                <div style={{ marginBottom: "20px" }}>
                  <label
                    style={{ display: "block", marginBottom: "20px" }}
                    className={classes.title}
                  >
                    {t("GreatSalepPriceDate")}
                  </label>
                  <div className={classes.datePicker}>
                    <DatePicker
                      inputClass={classes.input}
                      calendar={persian}
                      locale={persian_fa}
                      placeholder={t("from")}
                      format="YYYY-MM-DD HH:mm:ss"
                    />
                    <DatePicker
                      inputClass={classes.input}
                      calendar={persian}
                      locale={persian_fa}
                      placeholder={t("until")}
                      format="YYYY-MM-DD HH:mm:ss"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
          <label className={classes.title}>{t("Shippingsettings")}</label>
          <form>
            <div className={classes.radiobtn}>
              <input
                type="radio"
                id="huey"
                onChange={(e) => setShowPrice(e.target.value)}
                name="drone"
                value="huey"
              />
              <label htmlFor="huey">{t("FreeShipping")}</label>
            </div>

            <div className={classes.radiobtn}>
              <input
                type="radio"
                id="dewey"
                onChange={(e) => setShowPrice(e.target.value)}
                name="drone"
                value="dewey"
              />
              <label htmlFor="dewey">{t("Fixedfare")}</label>
              {showPrice === "dewey" ? (
                <input
                  placeholder={t("enterToman")}
                  type="number"
                  className={classes.input_title}
                />
              ) : (
                ""
              )}
            </div>
          </form>

          <div
            style={{
              marginBottom: "25px",
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ display: "inline", margin: "0 10px" }}>
              {t("returning")}
            </h3>
            <div>
              <CheckBox contentInActive="inactive" contentActive="active" />
            </div>
          </div>
        </div>
        <div className={classes.productInfo__leftSide}>
          <label className={classes.title}>{t("Productimages")}</label>

          <div className={classes.picture}>
            <div>
              <input
                type="file"
                ref={inputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              {!props.product?.category ? (
                <Icon
                  className={classes.picture__icon}
                  icon="icon-park-outline:add-picture"
                  width="128"
                  height="128"
                />
              ) : (
                <img
                  className={classes.picture__img}
                  src={props.product?.pic}
                />
              )}
            </div>
            <div className={classes.picture__footer}>
              <span>{t("minSize")}</span>
              <Link to="#">
                <Button outline cls onClick={handleUploadClick}>
                  {t("upload")}
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <label className={classes.title}>{t("ProductCategory")}</label>
            <div className={classes.multiselect}>
              <Multiselect
                isObject={false}
                options={optionList}
                placeholder={props.product?.category}
                hidePlaceholder={true}
                emptyRecordMsg={t("emptyRecordMsg")}
                onSelect={handleSelect}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
