import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import classes from "./Chart.module.scss";
import { useTranslation } from "react-i18next";
import { useLayoutEffect } from "react";
import Card from "../UI/card/Card";



const Chart = () => {
    const { t } = useTranslation();

    useLayoutEffect(() => {

        let root: any = am5.Root.new("chartdiv");
        root._logo.dispose();


        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);


        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        var chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "zoomX",
            pinchZoomX: true
        }));

        // Add cursor
        // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);


        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
        xRenderer.labels.template.setAll({
            rotation: -90,
            centerY: am5.p50,
            centerX: am5.p100,
            paddingRight: 15,
            direction: "rtl",
            fontFamily: "iranyekan"
        });
        var yRenderer = am5xy.AxisRendererY.new(root, {});
        yRenderer.labels.template.setAll({
            direction: "rtl",
            fontFamily: ""
        });

        var xtooltipRtl = am5.Tooltip.new(root, {})
        xtooltipRtl.label.setAll({
            direction: "rtl",
            fontFamily: "iranyekan"
        })

        root.interfaceColors.set("text", am5.color(0xa3a3a3));


        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0.3,
            categoryField: "month",
            renderer: xRenderer,
            tooltip: xtooltipRtl,
        }));

        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            renderer: yRenderer
        }));

        var tooltipRtl = am5.Tooltip.new(root, {
            labelText: "{valueY}"
        })
        tooltipRtl.label.setAll({
            direction: "rtl",
            fontFamily: ""
        })
        // Create series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            sequencedInterpolation: true,
            categoryXField: "month",
            tooltip: tooltipRtl
        }));

        series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
        series.columns.template.adapters.add("fill", function (fill: any, target: any) {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        series.columns.template.adapters.add("stroke", function (stroke: any, target: any) {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });


        // Set data
        // var data = dataChart;
        var data = [{
            month: "دی",
            value: 11.8
        }, {
            month: "بهمن",
            value: 6.8
        }, {
            month: "اسنفد",
            value: 5.98
        }, {
            month: "فروردین",
            value: 17.02
        }, {
            month: "اردیبهشت",
            value: 18.22
        }, {
            month: "خرداد",
            value: 15
        }, {
            month: "تیر",
            value: 17.22
        }, {
            month: "مرداد",
            value: 15.22
        }, {
            month: "شهریور",
            value: 14.14
        }];

        xAxis.data.setAll(data);
        series.data.setAll(data);


        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        series.appear(1000);
        chart.appear(1000, 100);

        root.current = root;

        return () => {
            root.dispose();
        };
    }, []);

    return (
        <section className={classes.chart}>
            <p className="subTitle">{t("quickAnalysis")}<span>{t("milT")}</span>
            </p>
            <Card>
                <div className={classes.chart__wrapper}>
                    <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>

                </div>
            </Card>
        </section>)
}

export default Chart;