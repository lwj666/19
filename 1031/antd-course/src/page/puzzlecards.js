/*
 * @Description: model学习
 * @Author: Do not edit
 * @Date: 2019-10-31 15:54:33
 * @LastEditTime: 2019-10-31 16:09:26
 * @LastEditors: winki
 */
import React,{Component} from 'react';
import Card from 'antd';

// 导出对外渲染模块
export default class PuzzleCardPage extends Component{
    // 构造器
    constructor(props){
        super(props);
        this.state = {
            cardList:[
                {
                    id : 1,
                    setup:'Did you see heart about the two silk worms in a races',
                    punchline:'It ended in a tie'
                },
                {
                    id:2,
                    setup:'what happens to a frog\'s car when it break down?',
                    punchline:'It gets toad away',
                },
            ],
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.cardList.map(card =>{
                        return(
                            <Card key={card.id}>
                                <div>Q:{card.setup}</div>
                                <div>
                                    <strong>A:{card.punchline}</strong>
                                </div>
                            </Card>
                        );
                    })
                }
            </div>
        );
    }
}