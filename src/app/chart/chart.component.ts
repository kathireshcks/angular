import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chart =[]
  constructor(private weather:WeatherService) { }

  ngOnInit() {
    this.weather.dailyForcast()
    .subscribe(res =>{
      console.log(res);
      let temp_max=res['list'].map(res => res.temp.max);
      let temp_min=res['list'].map(res => res.temp.min);
      let alldates=res['list'].map(res => res.dt);

      
      let weatherDates=[]
      
      alldates.forEach((res)=>{
        let jsdate=new Date(res * 1000)
        weatherDates.push(jsdate.toLocaleDateString('en',{year:'numeric',month:'short',day:'numeric'}))
      });

      this.chart=new Chart('canvas',{
        type:'line',
        data:{
          labels:weatherDates,
          datasets:[
            {
              data:temp_max,
              borderColor:'#3cba9f',
              fill:false
            },
            {
              data:temp_min,
              borderColor:'#ffcc00',
              fill:true
            },
          
          ]
        },
            options:{
              legend:{
                display:false
              },
              scales:{
                xAxes:[{
                  display:true
                }],
                yAxes:[{
                  diaplay:true
                }]
              }
            }
          
        

      });
    });
  }

}
