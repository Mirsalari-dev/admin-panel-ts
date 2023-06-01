import React, { useEffect, useState } from "react";
import { Itable as Props, complex } from "../../../interfaces/Itable";
import Card from "../../UI/card/Card";
import { useTranslation } from "react-i18next";
import classes from "./CustomTable.module.scss";
import Badge from "../../UI/badge/Badge";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import Modal from "../../UI/modal/Modal";
import { removeCustomer } from "../../../redux/customersSlice";
import { useAppDispatch } from "../../../redux/hooks";
import { removeComments } from "../../../redux/commentsSlice";
import { removeDiscount } from "../../../redux/discountSlice";

const CustomTable: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const router = useLocation()
  

  const [showModal, setShowModal] = useState(false);
  const [id, setID] = useState<any>();

  function showModalHandler() {
    setShowModal((prev) => !prev);
  }

  function modalConfirmHandler(id:any) {

    if(router.pathname === "/comments"){
      dispatch(removeComments(id));
    }
    if(router.pathname ==="/customers"){
      dispatch(removeCustomer(id));
    }
    if(router.pathname ==="/discount"){
      dispatch(removeDiscount(id));
    }
    setShowModal(false);
  }

  function tableBody(item: complex, index: number) {
    /* type guard (in typescript) */
    if ("username" in item) {
      //for implementing top customers
      return (
        <tr key={index}>
          <td>{item.username}</td>
          <td>{item.order}</td>
          <td>{item.price}</td>
        </tr>
      );
    } else if ("orderId" in item) {
      //for implementing latest transactions
      return (
        <tr key={index}>
          <td>{item.orderId}</td>
          <td>{item.customer}</td>
          <td>{item.totalPrice}</td>
          <td>{item.date}</td>
          <td>
            <Badge content={item.status} />
          </td>
        </tr>
      );
    } else if ("email" && "totalOrders" in item) {
      //for implementing customers table
      return (
        <>
          <tr key={index}>
            <td>{item.ID}</td>
            <td className={classes.userName}>
              <img
                className={classes.avatar}
                src={item.avatar}
                alt="user avatar"
              />
              {item.userName}
            </td>
            <td className="ltr">{item.email}</td>
            <td className="ltr">{item.phoneNumber}</td>
            <td>{item.totalOrders}</td>
            <td>{item.totalSpend}</td>
            <td>{item.location}</td>
            <td className={classes.actions}>
              <Icon icon="charm:menu-kebab" />
              <div className={classes.actions__box}>
                <div
                  className={classes.actions__delete}
                  onClick={() => {
                    setShowModal(true);
                    setID(item.ID);
                  }}
                >
                  <Icon icon="fluent:delete-24-regular" width="24" />
                </div>
                <div className={classes.actions__edit}>
                  <Link to={`/customers/${item.ID}`}>
                    <Icon icon="fluent:edit-16-regular" width="24" />
                  </Link>
                </div>
              </div>
            </td>
          </tr>
        </>
      );
    } else if ("category" in item) {
      //for implementing products table
      return (
        <tr key={index}>
          <td>{item.ID}</td>
          <td className={classes.product_name}>
            <img
              className={classes.product_img}
              src={item.pic}
              alt="user avatar"
            />
            {item.product}
          </td>
          <td>{item.inventory}</td>
          <td>{item.price}</td>
          <td>{item.category}</td>
          <td className={classes.actions}>
            <Icon icon="charm:menu-kebab" />
            <div className={classes.actions__box}>
              <div
                className={classes.actions__delete}
                onClick={showModalHandler}
              >
                <Icon icon="fluent:delete-24-regular" width="24" />
              </div>
              <div className={classes.actions__edit}>
                <Link to={`/products/${item.ID}`}>
                  <Icon icon="fluent:edit-16-regular" width="24" />
                </Link>
              </div>
            </div>
          </td>
        </tr>
      );
    } else if ("percent" in item) {
      //for implementing latest transactions
      return (
        <tr key={index}>
          <td>{item.discount}</td>
          <td>{item.percent}</td>
          <td>{t(item.expireDate)}</td>
          <td>{t(item.createdDate)}</td>
          <td>
            <Badge content={item.status} />
          </td>
          <td className={classes.actions}>
            <Icon icon="charm:menu-kebab" />
            <div className={classes.actions__box}>
              <div
                className={classes.actions__delete}
                onClick={() => {
                  setShowModal(true);
                  setID(item.ID);
                }}
              >
                <Icon icon="fluent:delete-24-regular" width="24" />
              </div>
              <div className={classes.actions__edit}>
                <Link to={`/discount/${item.discount}`}>
                  <Icon icon="fluent:edit-16-regular" width="24" />
                </Link>
              </div>
            </div>
          </td>
        </tr>
      );
    } else if ("text" in item) {
      //for implementing customers table
      return (
        <tr key={index}>
          <td>{item.ID}</td>
          <td className={classes.text}>
            <p>{item.text}</p>
          </td>
          <td className={classes.userName}>
            <img
              className={classes.avatar}
              src={item.avatar}
              alt="user avatar"
            />
            {item.userName}
          </td>
          <td className="ltr">{item.email}</td>
          <td>{t(item.date)}</td>
          <td>
            <Badge content={item.status} />
          </td>
          <td className={classes.actions}>
            <Icon icon="charm:menu-kebab" />
            <div className={classes.actions__box}>
              <div
                className={classes.actions__delete}
                onClick={() => {
                  setShowModal(true);
                  setID(item.ID);
                }}
              >
                <Icon icon="fluent:delete-24-regular" width="24" />
              </div>
              <div className={classes.actions__edit}>
                <Link to={`/comments/${item.ID}`}>
                  <Icon icon="fluent:edit-16-regular" width="24" />
                </Link>
              </div>
            </div>
          </td>
        </tr>
      );
    }
  }
  const initDataShow = () => {
    return props.limit && props.bodyData
      ? props.bodyData.slice(0, Number(props.limit))
      : props.bodyData;
  };

  const [dataShow, setDataShow] = useState(initDataShow);

  // const [selectedCategory, setSelectedCategory] = useState(
  //   props.selectedCategory
  // );

  // if (props.selectedCategory) {
  //   if (selectedCategory !== props.selectedCategory)
  //     setDataShow(props.bodyData);
  // }
  // setSelectedCategory(props.selectedCategory);

  let pages = 1;

  let range: number[] = [];

  if (props.limit !== undefined) {
    let page = Math.floor(props.bodyData.length / Number(props.limit));
    pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }

  const [currPage, setCurrPage] = useState(0);

  const selectPage = (page: number) => {
    const start = Number(props.limit) * page;
    const end = start + Number(props.limit);

    setDataShow(props.bodyData?.slice(start, end));

    setCurrPage(page);
  };

  // useEffect(() => {
  //   const start = Number(props.limit) * currPage;
  //   const end = start + Number(props.limit);

  //   setDataShow(props.bodyData?.slice(start, end));
  // }, [props.limit, currPage]);

  const { t } = useTranslation();

  return (
    <>
      {showModal && (
        <Modal
          title={t("delete")}
          message={`${t("modalMessage")}`}
          onCancel={showModalHandler}
          onConfirm={() => modalConfirmHandler(id)}
        />
      )}
      <div className={classes.container}>
        <Card>
          <div className={classes.wrapper}>
            <div className={classes.table__wrapper}>
              <table
                className={props.limit ? classes.largeTable : classes.table}
              >
                {props.headData ? (
                  <thead>
                    <tr>
                      {props.headData.map((item, index) => (
                        <th key={index}>{t(item)}</th>
                      ))}
                    </tr>
                  </thead>
                ) : null}
                <tbody>
                  {dataShow.map((item, index) => tableBody(item, index))}
                </tbody>
              </table>
            </div>

            {pages > 1 ? (
              <div className={classes.table__pagination}>
                {range.map((item, index) => (
                  <div
                    key={index}
                    className={`${classes.table__pagination_item} ${
                      currPage === index ? classes.active : ""
                    }`}
                    onClick={() => selectPage(index)}
                  >
                    {item + 1}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </Card>
      </div>
    </>
  );
};

export default CustomTable;
