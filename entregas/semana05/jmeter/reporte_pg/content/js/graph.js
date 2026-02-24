/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 23.0, "minX": 0.0, "maxY": 1108.0, "series": [{"data": [[0.0, 23.0], [0.1, 37.0], [0.2, 54.0], [0.3, 64.0], [0.4, 67.0], [0.5, 67.0], [0.6, 68.0], [0.7, 71.0], [0.8, 71.0], [0.9, 71.0], [1.0, 72.0], [1.1, 72.0], [1.2, 72.0], [1.3, 75.0], [1.4, 75.0], [1.5, 76.0], [1.6, 79.0], [1.7, 79.0], [1.8, 80.0], [1.9, 80.0], [2.0, 83.0], [2.1, 83.0], [2.2, 83.0], [2.3, 84.0], [2.4, 84.0], [2.5, 84.0], [2.6, 84.0], [2.7, 86.0], [2.8, 87.0], [2.9, 87.0], [3.0, 87.0], [3.1, 88.0], [3.2, 88.0], [3.3, 88.0], [3.4, 88.0], [3.5, 91.0], [3.6, 91.0], [3.7, 92.0], [3.8, 92.0], [3.9, 92.0], [4.0, 92.0], [4.1, 93.0], [4.2, 95.0], [4.3, 96.0], [4.4, 96.0], [4.5, 96.0], [4.6, 96.0], [4.7, 96.0], [4.8, 96.0], [4.9, 98.0], [5.0, 99.0], [5.1, 100.0], [5.2, 100.0], [5.3, 100.0], [5.4, 100.0], [5.5, 102.0], [5.6, 103.0], [5.7, 104.0], [5.8, 104.0], [5.9, 104.0], [6.0, 107.0], [6.1, 108.0], [6.2, 108.0], [6.3, 109.0], [6.4, 111.0], [6.5, 112.0], [6.6, 112.0], [6.7, 112.0], [6.8, 113.0], [6.9, 115.0], [7.0, 116.0], [7.1, 116.0], [7.2, 116.0], [7.3, 117.0], [7.4, 119.0], [7.5, 119.0], [7.6, 120.0], [7.7, 120.0], [7.8, 120.0], [7.9, 122.0], [8.0, 123.0], [8.1, 124.0], [8.2, 124.0], [8.3, 124.0], [8.4, 127.0], [8.5, 128.0], [8.6, 128.0], [8.7, 128.0], [8.8, 128.0], [8.9, 128.0], [9.0, 130.0], [9.1, 131.0], [9.2, 131.0], [9.3, 132.0], [9.4, 132.0], [9.5, 132.0], [9.6, 133.0], [9.7, 135.0], [9.8, 136.0], [9.9, 136.0], [10.0, 136.0], [10.1, 137.0], [10.2, 139.0], [10.3, 139.0], [10.4, 140.0], [10.5, 140.0], [10.6, 140.0], [10.7, 142.0], [10.8, 144.0], [10.9, 144.0], [11.0, 147.0], [11.1, 148.0], [11.2, 148.0], [11.3, 148.0], [11.4, 148.0], [11.5, 151.0], [11.6, 152.0], [11.7, 152.0], [11.8, 153.0], [11.9, 155.0], [12.0, 156.0], [12.1, 156.0], [12.2, 156.0], [12.3, 157.0], [12.4, 160.0], [12.5, 160.0], [12.6, 160.0], [12.7, 163.0], [12.8, 164.0], [12.9, 164.0], [13.0, 166.0], [13.1, 168.0], [13.2, 168.0], [13.3, 168.0], [13.4, 171.0], [13.5, 172.0], [13.6, 172.0], [13.7, 176.0], [13.8, 176.0], [13.9, 179.0], [14.0, 180.0], [14.1, 180.0], [14.2, 184.0], [14.3, 184.0], [14.4, 185.0], [14.5, 187.0], [14.6, 188.0], [14.7, 190.0], [14.8, 191.0], [14.9, 192.0], [15.0, 192.0], [15.1, 193.0], [15.2, 195.0], [15.3, 196.0], [15.4, 197.0], [15.5, 200.0], [15.6, 200.0], [15.7, 201.0], [15.8, 204.0], [15.9, 204.0], [16.0, 205.0], [16.1, 208.0], [16.2, 209.0], [16.3, 212.0], [16.4, 212.0], [16.5, 215.0], [16.6, 216.0], [16.7, 218.0], [16.8, 220.0], [16.9, 220.0], [17.0, 224.0], [17.1, 224.0], [17.2, 224.0], [17.3, 224.0], [17.4, 224.0], [17.5, 228.0], [17.6, 228.0], [17.7, 228.0], [17.8, 231.0], [17.9, 232.0], [18.0, 232.0], [18.1, 232.0], [18.2, 233.0], [18.3, 236.0], [18.4, 236.0], [18.5, 238.0], [18.6, 240.0], [18.7, 240.0], [18.8, 240.0], [18.9, 241.0], [19.0, 243.0], [19.1, 244.0], [19.2, 245.0], [19.3, 248.0], [19.4, 248.0], [19.5, 248.0], [19.6, 248.0], [19.7, 251.0], [19.8, 252.0], [19.9, 252.0], [20.0, 253.0], [20.1, 256.0], [20.2, 257.0], [20.3, 260.0], [20.4, 260.0], [20.5, 264.0], [20.6, 264.0], [20.7, 268.0], [20.8, 269.0], [20.9, 272.0], [21.0, 275.0], [21.1, 276.0], [21.2, 279.0], [21.3, 284.0], [21.4, 288.0], [21.5, 290.0], [21.6, 292.0], [21.7, 300.0], [21.8, 310.0], [21.9, 318.0], [22.0, 328.0], [22.1, 339.0], [22.2, 343.0], [22.3, 352.0], [22.4, 356.0], [22.5, 360.0], [22.6, 366.0], [22.7, 368.0], [22.8, 372.0], [22.9, 378.0], [23.0, 380.0], [23.1, 384.0], [23.2, 388.0], [23.3, 392.0], [23.4, 396.0], [23.5, 396.0], [23.6, 400.0], [23.7, 404.0], [23.8, 406.0], [23.9, 408.0], [24.0, 409.0], [24.1, 412.0], [24.2, 412.0], [24.3, 416.0], [24.4, 417.0], [24.5, 420.0], [24.6, 420.0], [24.7, 420.0], [24.8, 424.0], [24.9, 426.0], [25.0, 428.0], [25.1, 428.0], [25.2, 432.0], [25.3, 432.0], [25.4, 436.0], [25.5, 436.0], [25.6, 436.0], [25.7, 436.0], [25.8, 440.0], [25.9, 440.0], [26.0, 440.0], [26.1, 440.0], [26.2, 444.0], [26.3, 444.0], [26.4, 448.0], [26.5, 448.0], [26.6, 448.0], [26.7, 452.0], [26.8, 452.0], [26.9, 453.0], [27.0, 456.0], [27.1, 456.0], [27.2, 456.0], [27.3, 457.0], [27.4, 460.0], [27.5, 460.0], [27.6, 460.0], [27.7, 461.0], [27.8, 464.0], [27.9, 464.0], [28.0, 464.0], [28.1, 468.0], [28.2, 468.0], [28.3, 472.0], [28.4, 472.0], [28.5, 472.0], [28.6, 472.0], [28.7, 475.0], [28.8, 476.0], [28.9, 476.0], [29.0, 476.0], [29.1, 476.0], [29.2, 477.0], [29.3, 480.0], [29.4, 480.0], [29.5, 480.0], [29.6, 480.0], [29.7, 480.0], [29.8, 484.0], [29.9, 484.0], [30.0, 484.0], [30.1, 484.0], [30.2, 484.0], [30.3, 484.0], [30.4, 484.0], [30.5, 487.0], [30.6, 488.0], [30.7, 488.0], [30.8, 488.0], [30.9, 488.0], [31.0, 491.0], [31.1, 492.0], [31.2, 492.0], [31.3, 492.0], [31.4, 492.0], [31.5, 492.0], [31.6, 492.0], [31.7, 496.0], [31.8, 496.0], [31.9, 496.0], [32.0, 496.0], [32.1, 496.0], [32.2, 496.0], [32.3, 496.0], [32.4, 496.0], [32.5, 496.0], [32.6, 500.0], [32.7, 500.0], [32.8, 500.0], [32.9, 500.0], [33.0, 500.0], [33.1, 500.0], [33.2, 500.0], [33.3, 503.0], [33.4, 504.0], [33.5, 504.0], [33.6, 504.0], [33.7, 504.0], [33.8, 504.0], [33.9, 504.0], [34.0, 505.0], [34.1, 508.0], [34.2, 508.0], [34.3, 508.0], [34.4, 508.0], [34.5, 508.0], [34.6, 508.0], [34.7, 508.0], [34.8, 508.0], [34.9, 511.0], [35.0, 512.0], [35.1, 512.0], [35.2, 512.0], [35.3, 512.0], [35.4, 512.0], [35.5, 512.0], [35.6, 512.0], [35.7, 513.0], [35.8, 515.0], [35.9, 516.0], [36.0, 516.0], [36.1, 516.0], [36.2, 516.0], [36.3, 516.0], [36.4, 516.0], [36.5, 516.0], [36.6, 516.0], [36.7, 516.0], [36.8, 516.0], [36.9, 516.0], [37.0, 520.0], [37.1, 520.0], [37.2, 520.0], [37.3, 520.0], [37.4, 520.0], [37.5, 520.0], [37.6, 520.0], [37.7, 520.0], [37.8, 520.0], [37.9, 520.0], [38.0, 520.0], [38.1, 523.0], [38.2, 524.0], [38.3, 524.0], [38.4, 524.0], [38.5, 524.0], [38.6, 524.0], [38.7, 524.0], [38.8, 524.0], [38.9, 524.0], [39.0, 524.0], [39.1, 525.0], [39.2, 528.0], [39.3, 528.0], [39.4, 528.0], [39.5, 528.0], [39.6, 528.0], [39.7, 528.0], [39.8, 528.0], [39.9, 528.0], [40.0, 528.0], [40.1, 530.0], [40.2, 531.0], [40.3, 532.0], [40.4, 532.0], [40.5, 532.0], [40.6, 532.0], [40.7, 532.0], [40.8, 532.0], [40.9, 532.0], [41.0, 532.0], [41.1, 532.0], [41.2, 532.0], [41.3, 535.0], [41.4, 536.0], [41.5, 536.0], [41.6, 536.0], [41.7, 536.0], [41.8, 536.0], [41.9, 536.0], [42.0, 536.0], [42.1, 536.0], [42.2, 536.0], [42.3, 536.0], [42.4, 536.0], [42.5, 536.0], [42.6, 536.0], [42.7, 536.0], [42.8, 539.0], [42.9, 540.0], [43.0, 540.0], [43.1, 540.0], [43.2, 540.0], [43.3, 540.0], [43.4, 540.0], [43.5, 540.0], [43.6, 540.0], [43.7, 540.0], [43.8, 540.0], [43.9, 540.0], [44.0, 543.0], [44.1, 544.0], [44.2, 544.0], [44.3, 544.0], [44.4, 544.0], [44.5, 544.0], [44.6, 544.0], [44.7, 544.0], [44.8, 544.0], [44.9, 544.0], [45.0, 544.0], [45.1, 544.0], [45.2, 545.0], [45.3, 548.0], [45.4, 548.0], [45.5, 548.0], [45.6, 548.0], [45.7, 548.0], [45.8, 548.0], [45.9, 548.0], [46.0, 548.0], [46.1, 548.0], [46.2, 548.0], [46.3, 548.0], [46.4, 548.0], [46.5, 550.0], [46.6, 552.0], [46.7, 552.0], [46.8, 552.0], [46.9, 552.0], [47.0, 552.0], [47.1, 552.0], [47.2, 552.0], [47.3, 552.0], [47.4, 552.0], [47.5, 552.0], [47.6, 552.0], [47.7, 554.0], [47.8, 556.0], [47.9, 556.0], [48.0, 556.0], [48.1, 556.0], [48.2, 556.0], [48.3, 556.0], [48.4, 556.0], [48.5, 556.0], [48.6, 556.0], [48.7, 556.0], [48.8, 556.0], [48.9, 556.0], [49.0, 557.0], [49.1, 559.0], [49.2, 560.0], [49.3, 560.0], [49.4, 560.0], [49.5, 560.0], [49.6, 560.0], [49.7, 560.0], [49.8, 560.0], [49.9, 560.0], [50.0, 560.0], [50.1, 560.0], [50.2, 560.0], [50.3, 562.0], [50.4, 563.0], [50.5, 564.0], [50.6, 564.0], [50.7, 564.0], [50.8, 564.0], [50.9, 564.0], [51.0, 564.0], [51.1, 564.0], [51.2, 564.0], [51.3, 564.0], [51.4, 564.0], [51.5, 564.0], [51.6, 564.0], [51.7, 564.0], [51.8, 567.0], [51.9, 568.0], [52.0, 568.0], [52.1, 568.0], [52.2, 568.0], [52.3, 568.0], [52.4, 568.0], [52.5, 568.0], [52.6, 568.0], [52.7, 568.0], [52.8, 568.0], [52.9, 568.0], [53.0, 568.0], [53.1, 568.0], [53.2, 568.0], [53.3, 569.0], [53.4, 571.0], [53.5, 572.0], [53.6, 572.0], [53.7, 572.0], [53.8, 572.0], [53.9, 572.0], [54.0, 572.0], [54.1, 572.0], [54.2, 572.0], [54.3, 572.0], [54.4, 572.0], [54.5, 572.0], [54.6, 572.0], [54.7, 572.0], [54.8, 572.0], [54.9, 575.0], [55.0, 576.0], [55.1, 576.0], [55.2, 576.0], [55.3, 576.0], [55.4, 576.0], [55.5, 576.0], [55.6, 576.0], [55.7, 576.0], [55.8, 576.0], [55.9, 576.0], [56.0, 576.0], [56.1, 576.0], [56.2, 576.0], [56.3, 577.0], [56.4, 578.0], [56.5, 579.0], [56.6, 580.0], [56.7, 580.0], [56.8, 580.0], [56.9, 580.0], [57.0, 580.0], [57.1, 580.0], [57.2, 580.0], [57.3, 580.0], [57.4, 580.0], [57.5, 583.0], [57.6, 584.0], [57.7, 584.0], [57.8, 584.0], [57.9, 584.0], [58.0, 584.0], [58.1, 584.0], [58.2, 584.0], [58.3, 584.0], [58.4, 584.0], [58.5, 584.0], [58.6, 584.0], [58.7, 584.0], [58.8, 584.0], [58.9, 584.0], [59.0, 585.0], [59.1, 588.0], [59.2, 588.0], [59.3, 588.0], [59.4, 588.0], [59.5, 588.0], [59.6, 588.0], [59.7, 588.0], [59.8, 588.0], [59.9, 588.0], [60.0, 588.0], [60.1, 588.0], [60.2, 588.0], [60.3, 589.0], [60.4, 591.0], [60.5, 592.0], [60.6, 592.0], [60.7, 592.0], [60.8, 592.0], [60.9, 592.0], [61.0, 592.0], [61.1, 592.0], [61.2, 592.0], [61.3, 592.0], [61.4, 592.0], [61.5, 592.0], [61.6, 594.0], [61.7, 595.0], [61.8, 596.0], [61.9, 596.0], [62.0, 596.0], [62.1, 596.0], [62.2, 596.0], [62.3, 596.0], [62.4, 596.0], [62.5, 596.0], [62.6, 596.0], [62.7, 596.0], [62.8, 596.0], [62.9, 596.0], [63.0, 596.0], [63.1, 597.0], [63.2, 599.0], [63.3, 600.0], [63.4, 600.0], [63.5, 600.0], [63.6, 600.0], [63.7, 600.0], [63.8, 600.0], [63.9, 600.0], [64.0, 600.0], [64.1, 600.0], [64.2, 600.0], [64.3, 600.0], [64.4, 600.0], [64.5, 600.0], [64.6, 601.0], [64.7, 602.0], [64.8, 604.0], [64.9, 604.0], [65.0, 604.0], [65.1, 604.0], [65.2, 604.0], [65.3, 604.0], [65.4, 604.0], [65.5, 604.0], [65.6, 604.0], [65.7, 604.0], [65.8, 604.0], [65.9, 604.0], [66.0, 604.0], [66.1, 604.0], [66.2, 604.0], [66.3, 606.0], [66.4, 607.0], [66.5, 608.0], [66.6, 608.0], [66.7, 608.0], [66.8, 608.0], [66.9, 608.0], [67.0, 608.0], [67.1, 608.0], [67.2, 608.0], [67.3, 608.0], [67.4, 608.0], [67.5, 608.0], [67.6, 608.0], [67.7, 609.0], [67.8, 611.0], [67.9, 612.0], [68.0, 612.0], [68.1, 612.0], [68.2, 612.0], [68.3, 612.0], [68.4, 612.0], [68.5, 612.0], [68.6, 612.0], [68.7, 612.0], [68.8, 612.0], [68.9, 612.0], [69.0, 612.0], [69.1, 613.0], [69.2, 614.0], [69.3, 616.0], [69.4, 616.0], [69.5, 616.0], [69.6, 616.0], [69.7, 616.0], [69.8, 616.0], [69.9, 616.0], [70.0, 616.0], [70.1, 616.0], [70.2, 616.0], [70.3, 616.0], [70.4, 616.0], [70.5, 616.0], [70.6, 616.0], [70.7, 618.0], [70.8, 619.0], [70.9, 620.0], [71.0, 620.0], [71.1, 620.0], [71.2, 620.0], [71.3, 620.0], [71.4, 620.0], [71.5, 620.0], [71.6, 620.0], [71.7, 620.0], [71.8, 620.0], [71.9, 620.0], [72.0, 620.0], [72.1, 621.0], [72.2, 623.0], [72.3, 624.0], [72.4, 624.0], [72.5, 624.0], [72.6, 624.0], [72.7, 624.0], [72.8, 624.0], [72.9, 624.0], [73.0, 624.0], [73.1, 624.0], [73.2, 624.0], [73.3, 624.0], [73.4, 624.0], [73.5, 627.0], [73.6, 628.0], [73.7, 628.0], [73.8, 628.0], [73.9, 628.0], [74.0, 628.0], [74.1, 628.0], [74.2, 628.0], [74.3, 628.0], [74.4, 628.0], [74.5, 628.0], [74.6, 629.0], [74.7, 631.0], [74.8, 632.0], [74.9, 632.0], [75.0, 632.0], [75.1, 632.0], [75.2, 632.0], [75.3, 632.0], [75.4, 632.0], [75.5, 632.0], [75.6, 632.0], [75.7, 632.0], [75.8, 632.0], [75.9, 632.0], [76.0, 632.0], [76.1, 635.0], [76.2, 636.0], [76.3, 636.0], [76.4, 636.0], [76.5, 636.0], [76.6, 636.0], [76.7, 636.0], [76.8, 636.0], [76.9, 636.0], [77.0, 636.0], [77.1, 636.0], [77.2, 638.0], [77.3, 639.0], [77.4, 640.0], [77.5, 640.0], [77.6, 640.0], [77.7, 640.0], [77.8, 640.0], [77.9, 640.0], [78.0, 640.0], [78.1, 640.0], [78.2, 640.0], [78.3, 641.0], [78.4, 643.0], [78.5, 644.0], [78.6, 644.0], [78.7, 644.0], [78.8, 644.0], [78.9, 644.0], [79.0, 644.0], [79.1, 644.0], [79.2, 644.0], [79.3, 644.0], [79.4, 644.0], [79.5, 646.0], [79.6, 648.0], [79.7, 648.0], [79.8, 648.0], [79.9, 648.0], [80.0, 648.0], [80.1, 648.0], [80.2, 648.0], [80.3, 648.0], [80.4, 649.0], [80.5, 651.0], [80.6, 652.0], [80.7, 652.0], [80.8, 652.0], [80.9, 652.0], [81.0, 652.0], [81.1, 652.0], [81.2, 652.0], [81.3, 652.0], [81.4, 652.0], [81.5, 653.0], [81.6, 655.0], [81.7, 656.0], [81.8, 656.0], [81.9, 656.0], [82.0, 656.0], [82.1, 656.0], [82.2, 656.0], [82.3, 656.0], [82.4, 656.0], [82.5, 656.0], [82.6, 656.0], [82.7, 660.0], [82.8, 660.0], [82.9, 660.0], [83.0, 660.0], [83.1, 660.0], [83.2, 660.0], [83.3, 660.0], [83.4, 660.0], [83.5, 663.0], [83.6, 664.0], [83.7, 664.0], [83.8, 664.0], [83.9, 664.0], [84.0, 664.0], [84.1, 664.0], [84.2, 664.0], [84.3, 667.0], [84.4, 668.0], [84.5, 668.0], [84.6, 668.0], [84.7, 668.0], [84.8, 668.0], [84.9, 668.0], [85.0, 668.0], [85.1, 668.0], [85.2, 668.0], [85.3, 670.0], [85.4, 671.0], [85.5, 672.0], [85.6, 672.0], [85.7, 672.0], [85.8, 672.0], [85.9, 672.0], [86.0, 673.0], [86.1, 675.0], [86.2, 676.0], [86.3, 676.0], [86.4, 676.0], [86.5, 676.0], [86.6, 676.0], [86.7, 676.0], [86.8, 676.0], [86.9, 677.0], [87.0, 680.0], [87.1, 680.0], [87.2, 680.0], [87.3, 680.0], [87.4, 680.0], [87.5, 680.0], [87.6, 680.0], [87.7, 683.0], [87.8, 684.0], [87.9, 684.0], [88.0, 684.0], [88.1, 684.0], [88.2, 684.0], [88.3, 684.0], [88.4, 684.0], [88.5, 688.0], [88.6, 688.0], [88.7, 688.0], [88.8, 688.0], [88.9, 688.0], [89.0, 688.0], [89.1, 688.0], [89.2, 688.0], [89.3, 692.0], [89.4, 692.0], [89.5, 692.0], [89.6, 692.0], [89.7, 692.0], [89.8, 692.0], [89.9, 692.0], [90.0, 695.0], [90.1, 696.0], [90.2, 696.0], [90.3, 696.0], [90.4, 696.0], [90.5, 696.0], [90.6, 699.0], [90.7, 700.0], [90.8, 700.0], [90.9, 700.0], [91.0, 700.0], [91.1, 701.0], [91.2, 704.0], [91.3, 704.0], [91.4, 704.0], [91.5, 704.0], [91.6, 704.0], [91.7, 704.0], [91.8, 704.0], [91.9, 707.0], [92.0, 708.0], [92.1, 708.0], [92.2, 708.0], [92.3, 708.0], [92.4, 708.0], [92.5, 708.0], [92.6, 711.0], [92.7, 712.0], [92.8, 712.0], [92.9, 712.0], [93.0, 712.0], [93.1, 712.0], [93.2, 716.0], [93.3, 716.0], [93.4, 716.0], [93.5, 716.0], [93.6, 716.0], [93.7, 720.0], [93.8, 720.0], [93.9, 720.0], [94.0, 720.0], [94.1, 723.0], [94.2, 724.0], [94.3, 724.0], [94.4, 724.0], [94.5, 726.0], [94.6, 727.0], [94.7, 728.0], [94.8, 728.0], [94.9, 728.0], [95.0, 728.0], [95.1, 731.0], [95.2, 732.0], [95.3, 732.0], [95.4, 733.0], [95.5, 736.0], [95.6, 736.0], [95.7, 740.0], [95.8, 740.0], [95.9, 741.0], [96.0, 744.0], [96.1, 744.0], [96.2, 748.0], [96.3, 748.0], [96.4, 748.0], [96.5, 750.0], [96.6, 752.0], [96.7, 752.0], [96.8, 752.0], [96.9, 756.0], [97.0, 756.0], [97.1, 760.0], [97.2, 764.0], [97.3, 764.0], [97.4, 768.0], [97.5, 768.0], [97.6, 772.0], [97.7, 772.0], [97.8, 776.0], [97.9, 780.0], [98.0, 780.0], [98.1, 784.0], [98.2, 788.0], [98.3, 788.0], [98.4, 792.0], [98.5, 793.0], [98.6, 796.0], [98.7, 798.0], [98.8, 804.0], [98.9, 808.0], [99.0, 812.0], [99.1, 816.0], [99.2, 824.0], [99.3, 836.0], [99.4, 844.0], [99.5, 860.0], [99.6, 869.0], [99.7, 908.0], [99.8, 936.0], [99.9, 984.0]], "isOverall": false, "label": "Top Stations", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1707.0, "series": [{"data": [[0.0, 284.0], [1100.0, 2.0], [300.0, 103.0], [600.0, 1525.0], [700.0, 451.0], [100.0, 578.0], [200.0, 346.0], [400.0, 504.0], [800.0, 54.0], [900.0, 14.0], [500.0, 1707.0], [1000.0, 1.0]], "isOverall": false, "label": "Top Stations", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1849.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3720.0, "series": [{"data": [[0.0, 1849.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3720.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 11.805929919137471, "minX": 1.77190116E12, "maxY": 46.73528280107743, "series": [{"data": [[1.77190116E12, 11.805929919137471], [1.77190122E12, 46.73528280107743]], "isOverall": false, "label": "Load", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77190122E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 61.4, "minX": 1.0, "maxY": 593.966532162356, "series": [{"data": [[2.0, 61.4], [3.0, 198.63636363636365], [4.0, 115.15384615384615], [5.0, 70.30769230769229], [6.0, 70.94117647058825], [7.0, 76.875], [8.0, 194.68], [9.0, 103.0], [10.0, 105.49999999999999], [11.0, 86.54166666666666], [12.0, 149.53571428571425], [13.0, 123.85714285714286], [14.0, 121.7741935483871], [15.0, 123.45454545454544], [16.0, 112.24242424242425], [17.0, 152.03846153846152], [18.0, 135.56666666666666], [19.0, 157.25925925925924], [20.0, 149.91666666666666], [21.0, 118.45454545454545], [22.0, 168.45714285714283], [23.0, 156.79411764705884], [24.0, 139.25], [25.0, 172.2162162162162], [26.0, 155.4871794871795], [27.0, 169.50000000000003], [28.0, 156.28124999999994], [29.0, 212.44444444444446], [30.0, 193.6], [31.0, 201.6774193548387], [32.0, 199.2666666666667], [33.0, 208.9393939393939], [34.0, 236.26315789473682], [35.0, 233.9666666666667], [36.0, 231.7878787878788], [37.0, 241.64285714285708], [38.0, 256.97222222222223], [39.0, 249.70588235294116], [40.0, 243.875], [41.0, 252.38235294117652], [42.0, 268.9428571428571], [43.0, 246.9], [44.0, 296.94594594594594], [45.0, 345.53333333333336], [46.0, 421.33333333333337], [47.0, 443.3], [48.0, 439.5], [49.0, 489.2], [50.0, 593.966532162356], [1.0, 383.5]], "isOverall": false, "label": "Top Stations", "isController": false}, {"data": [[44.40833183695453, 497.7270605135571]], "isOverall": false, "label": "Top Stations-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1051.1666666666667, "minX": 1.77190116E12, "maxY": 25816.733333333334, "series": [{"data": [[1.77190116E12, 1842.6333333333334], [1.77190122E12, 25816.733333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77190116E12, 1051.1666666666667], [1.77190122E12, 14727.666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77190122E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 90.73854447439355, "minX": 1.77190116E12, "maxY": 526.7752981916134, "series": [{"data": [[1.77190116E12, 90.73854447439355], [1.77190122E12, 526.7752981916134]], "isOverall": false, "label": "Top Stations", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77190122E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 90.71698113207549, "minX": 1.77190116E12, "maxY": 526.7706810311671, "series": [{"data": [[1.77190116E12, 90.71698113207549], [1.77190122E12, 526.7706810311671]], "isOverall": false, "label": "Top Stations", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77190122E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.004809542131589092, "minX": 1.77190116E12, "maxY": 0.08894878706199455, "series": [{"data": [[1.77190116E12, 0.08894878706199455], [1.77190122E12, 0.004809542131589092]], "isOverall": false, "label": "Top Stations", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77190122E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 23.0, "minX": 1.77190116E12, "maxY": 1108.0, "series": [{"data": [[1.77190116E12, 163.0], [1.77190122E12, 1108.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77190116E12, 116.0], [1.77190122E12, 700.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77190116E12, 154.55999999999995], [1.77190122E12, 816.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77190116E12, 128.0], [1.77190122E12, 732.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77190116E12, 23.0], [1.77190122E12, 60.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77190116E12, 88.0], [1.77190122E12, 569.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77190122E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 68.0, "minX": 19.0, "maxY": 737.0, "series": [{"data": [[66.0, 737.0], [71.0, 669.0], [73.0, 654.0], [75.0, 652.0], [78.0, 636.0], [77.0, 640.0], [76.0, 614.0], [82.0, 544.0], [81.0, 605.0], [83.0, 624.0], [80.0, 590.0], [87.0, 588.5], [84.0, 596.0], [86.0, 572.0], [85.0, 583.5], [91.0, 536.0], [88.0, 576.0], [89.0, 600.0], [90.0, 584.0], [93.0, 556.0], [95.0, 536.0], [92.0, 544.0], [107.0, 372.0], [123.0, 88.0], [147.0, 101.0], [159.0, 204.0], [162.0, 128.5], [164.0, 240.5], [170.0, 146.0], [19.0, 68.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 170.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 68.0, "minX": 19.0, "maxY": 737.0, "series": [{"data": [[66.0, 737.0], [71.0, 669.0], [73.0, 654.0], [75.0, 652.0], [78.0, 636.0], [77.0, 640.0], [76.0, 614.0], [82.0, 544.0], [81.0, 605.0], [83.0, 624.0], [80.0, 590.0], [87.0, 588.5], [84.0, 596.0], [86.0, 572.0], [85.0, 583.5], [91.0, 536.0], [88.0, 576.0], [89.0, 600.0], [90.0, 584.0], [93.0, 556.0], [95.0, 536.0], [92.0, 544.0], [107.0, 372.0], [123.0, 88.0], [147.0, 101.0], [159.0, 204.0], [162.0, 128.0], [164.0, 240.5], [170.0, 146.0], [19.0, 68.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 170.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 6.5, "minX": 1.77190116E12, "maxY": 86.31666666666666, "series": [{"data": [[1.77190116E12, 6.5], [1.77190122E12, 86.31666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77190122E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 6.183333333333334, "minX": 1.77190116E12, "maxY": 86.63333333333334, "series": [{"data": [[1.77190116E12, 6.183333333333334], [1.77190122E12, 86.63333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77190122E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 6.183333333333334, "minX": 1.77190116E12, "maxY": 86.63333333333334, "series": [{"data": [[1.77190116E12, 6.183333333333334], [1.77190122E12, 86.63333333333334]], "isOverall": false, "label": "Top Stations-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77190122E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 6.183333333333334, "minX": 1.77190116E12, "maxY": 86.63333333333334, "series": [{"data": [[1.77190116E12, 6.183333333333334], [1.77190122E12, 86.63333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77190122E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

