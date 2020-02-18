import React, { useState, useCallback } from 'react';
import { Card, Page, Layout, TextStyle } from '@shopify/polaris';
import revenue from "./images/revenue.png";
import sale from "./images/sale.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classnames from 'classnames';
import SelectExample from 'js/components/customer/components/select/select';




export const ReportArchive = (props) => {
    let [state, setState] = useState({ day: '', month: '', year: '' });

    const [selectedDates, setSelectedDates] = useState({});

    return (
        <Page>
            <Layout>
                <Layout.Section>
                    <div className='custom-react-select'>
                        <DatePicker
                            className={classnames('form-control react-dob-input')}
                            selected={state.date ? state.date : null}
                            onChange={(e) => this.handleChange(e, 'date')}
                            maxDate={new Date()}
                            showYearDropdown
                            placeholderText='date picker'
                        />
                    </div>
                    <Card sectioned>
                        <div className="section1" >
                            <div>
                                <h3 className="header1">invoice #023</h3>
                                <h1 className="header2">DAILY REPORT </h1>
                                <div
                                    className="alignment1"
                                    style={{ borderRadius: "0vw", backgroundColor: "white" }}
                                >
                                    <p style={{ fontWeight: "bolder" }}>Quantity</p>
                                    <p style={{ fontWeight: "bolder" }}>Price</p>
                                </div>
                                <div className="alignment1">
                                    <div className="img-container"><img src={revenue} alt="" /></div>
                                    <h2 >Revenue</h2>
                                    <p>280</p>
                                    <p>$812</p>
                                </div>
                                <div className="inner-content">
                                    <li>week: $239.00<TextStyle variation="subdued"> (Same week last year: $435.00)</TextStyle> </li>
                                    <li>month:$239.00 $435.00(Same month last year)</li>
                                    <li>year:$239.00 $435.00(last year)</li>
                                </div>
                                <div className="alignment1">
                                    <div className="img-container"><img className="sale-img" src={sale} alt="" /></div>
                                    <h2 >Sales</h2>
                                    <p>280</p>
                                    <p>$812</p>
                                </div>
                                <div className="inner-content">
                                    <li>week:$239.00     $435.00(Same week last year)</li>
                                    <li>month:$239.00 $435.00(Same month last year)</li>
                                    <li>year:$239.00 $435.00(Same year last year)</li>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Layout.Section>
            </Layout>
            <Card>
                <h3 id="text">Popular Products</h3>
                <div className="bottom-part">
                    <Card sectioned >
                        <div className="one">
                            <h3 >best sellers Yesterday</h3>
                            <p >Baby clothes</p>
                            <p >Mason jar pour caps.</p>
                            <p >Fidget spinner</p>
                        </div>
                    </Card>
                    <Card sectioned  >
                        <div className="two">
                            <h3 >best sellers Last month</h3>
                            <p >Shapewear.</p>
                            <p >Skin Care</p>
                            <p >Smart Watch</p>
                        </div>
                    </Card>
                </div>
            </Card>
        </Page>
    );
}
