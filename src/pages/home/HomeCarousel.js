/**
 *@auther: tang
 @Date: 2020-11-03
 *Project: netbaseMusic
 */
import React from "react"
import { Carousel,Image } from 'antd';
import "./HomeCarousel.css"
import {Link} from "react-router-dom"
class HomeCarousel extends React.Component {
    render() {
        const bannersItems = this.props.banners.map((item,index)=>{
            return (
                <div className="bannerItem" key={item.encodeId}>
                    {item.targetType==1? <Link to={{pathname:`/musicDetail/${item.targetId}`}}>
                        <Image src={item.imageUrl} preview={false}/>
                    </Link>:(item.targetType==3000?<a href={item.url}>
                        <Image src={item.imageUrl} preview={false}/>
                    </a>:"")}

                    </div>
            )
        });
        return (
            <div className="homeCarousel">
                <Carousel effect="fade" autoplay={true} draggable={true} arrows={true}>
                    {bannersItems}
                </Carousel>
            </div>
        )
    } }


export {HomeCarousel as default}
