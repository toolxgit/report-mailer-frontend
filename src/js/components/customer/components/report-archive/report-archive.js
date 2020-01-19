import React from 'react';
import { Card, DataTable, Page, Layout } from '@shopify/polaris';
import CardComponent from 'js/components/customer/components/card/card';

export const ReportArchive = (props) => {
    return (
        <Page >
            <Layout>
                <Layout.Section>
                    <Card sectioned>
                        <div className="section1" >
                            <div>
                                <h1 className="header">DAILY REPORT #023</h1>
                                <div
                                    className="alignment1"
                                    style={{ borderRadius: "0vw", backgroundColor: "white" }}
                                >
                                        <h2></h2>
                                        <p>Quantity</p>
                                        <p>Price</p>
                                </div>
                                    <div className="alignment1">
                                        <h2 >Revenue</h2>
                                        <p>280</p>
                                        <p>$812</p>
                                    </div>
                                <div className="inner-content">
                                    <li>week:$239.00     $435.00(Same week last year)</li>
                                    <li>month:$239.00 $435.00(Same month last year)</li>
                                    <li>year:$239.00 $435.00(Same year last year)</li>
                                </div>
                                    <div className="alignment1">
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
