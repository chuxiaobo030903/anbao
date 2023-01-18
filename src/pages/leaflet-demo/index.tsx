import React, { useEffect } from "react";
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import './index.less';

const LeafletDemo: any = () => {

    useEffect(() => {
        pageInit()
    }, []);

    const pageInit = ()=>{
        const map = L.map('xmap', {
            center: [30.25027961206251, 120.16514401757941], //  默认地图展示位置
            minZoom: 3,
            maxZoom: 18,
            zoom: 14,
            // crs: L.CRS.EPSG3857,
            // crs: L.CRS.EPSG4326,
            attributionControl: false,
        });
        // 加载底图
        L.tileLayer("http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=3131a9355f28fb662853cfa719d3e160&x={x}&y={y}&z={z}").addTo(map)
    }

    return (
      <div className="leaflet-demo">
        <div className="w100 h100" id="xmap"></div>
      </div>
    );
  };

  export default LeafletDemo;
