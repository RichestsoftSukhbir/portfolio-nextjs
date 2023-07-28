import text from '@/config/text';

const { aboutText } = text;

export default function About() {

    function textGen() {
        let texts = [];
        let count = Object.keys(aboutText).length;
        for (let i = 1; i <= count; i++) {
            let textItems = (
                <p className='mb-3' key={i} dangerouslySetInnerHTML={{ __html: aboutText[i] }} />
            )
            texts.push(textItems);
        }
        return texts;
    }

    return (
        <section className="about-section spacer-y">
            <div className="container">
                <h2 dangerouslySetInnerHTML={{ __html: text.titles.about }} className='mb-40' />
                {textGen()}
            </div>
        </section>
    )
}