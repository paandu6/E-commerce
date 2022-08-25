import classes from './HomeContent.module.css'
import Content from './Content'
const data=[
    {
        title:'DETROIT, MI',
        description:'DTE ENERGY MUSIC THEATRE',
        date:'July 16'
    },
    {
        title:'TORONTO,ON',
        description:'BUDWEISER STAGE',
        date:'July 20'
    },
    {
        title:'BRISTOW, VA',
        description:'JIGGY LUBE LIVE',
        date:"July 22"
    },
    {
        title:'PHOENIX, AZ',
        description:'AK-CHIN PAVILION',
        date:"July 24"
    },
    {
        title:'LAS VEGAS, NV',
        description:'T-MOBILE ARENA',
        date:'July 26'
    },
    {
        title:'CONCORD, CA',
        description:'CONCORD PAVILION',
        date:'July 28'
    }
]

function HomeContent(){
    const content=data.map((data)=>(
        <Content date={data.date} title={data.title} description={data.description}/>
    ))
    return(
        <section className={classes.content}>
            <h2>Tours</h2>
            <ul className={classes.list}>
                {content}
            </ul>
        </section>
    )
}

export default HomeContent