import Accordion from "../components/Accordion";

const items=[
    {   
        id:self.crypto.randomUUID(),
        label:'How angular uses different approach to create a spa?',
        content:'In other libraries such as react and uses one way binding approach in angular it uses two way binding approach'
    },
    {
        id:self.crypto.randomUUID(),
        label:'Why django considered to be opinionated and includes batteries?',
        content:'In django world dry and structure way of implementing server is crucial. sometimes it enforces you the most adapted way.'
    },
    {
        id:self.crypto.randomUUID(),
        label:'Vue is underrated?',
        content:'Vue is another fe frameowrk among js infinite libraries. It sometimes refered angular lite.'
    }
]

function AccordionPage() {
    return (
        <>
         <Accordion items={items}/>  
        </>
    );
}

export default AccordionPage;
