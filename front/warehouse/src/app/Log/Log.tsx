import React, { useRef, useCallback } from "react";
import createSearchPage, { GetDataApi } from "search-page";
import { warehouse as API_WAREHOUSE } from "@/api";
import FiltersForm from "./FilterForm";
import Content from "./Content";
import { PopNotification } from "@/utils/popup";

const getDataApi: GetDataApi = async (filters, pagination) => {
  try {
    const { data } = await API_WAREHOUSE.log_list_get({
      params: {
        pageNo: pagination.current,
        pageSize: pagination.pageSize,
        ...filters
      }
    });
    return {
      data: data.data,
      total: data.meta.count
    };
  } catch (error) {
    PopNotification.error(`请求失败：${error.message}`);
    return {
      data: [],
      total: 0
    };
  }
};

const SearchPage = createSearchPage({
  pageSize: 10,
  noPagination: false,
  getDataApi,
  FiltersForm
});

const Log = () => {
  const searchPageRef = useRef({ forceUpdate: () => undefined });
  return <SearchPage ref={searchPageRef}>{Content}</SearchPage>;
};

export default Log;
