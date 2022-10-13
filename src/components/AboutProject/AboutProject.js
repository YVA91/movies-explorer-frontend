import './AboutProject.css';

function AboutProject() {

    return (
    <section className="aboutproject">
        <div className="aboutproject__title">
            <h2 className="aboutproject__title-text">
                О проекте
            </h2>
        </div>
        <article className="aboutproject__text">
            <h3 className="aboutproject__text-title">Дипломный проект включал 5 этапов</h3>
            <h3 className="aboutproject__text-title">На выполнение диплома ушло 5 недель</h3>
            <p className="aboutproject__text-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            <p className="aboutproject__text-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
        <div className="aboutproject__visualization">
            <div className="aboutproject__visualization-item">
                <p className="aboutproject__visualization-time aboutproject__visualization-time_first">
                    1 неделя
                </p>
                <p className="aboutproject__visualization-time aboutproject__visualization-time_second">
                    4 недели
                </p>
            </div>
            <div className="aboutproject__visualization-item">
                <p className="aboutproject__visualization-text aboutproject__visualization-text_first">
                    Back-end
                </p>
                <p className="aboutproject__visualization-text aboutproject__visualization-text_second">
                    Front-end
                </p>
            </div>
        </div>
    </section>
    );
}

export default AboutProject;
