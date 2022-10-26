import React from "react";
import CollapseWrapper from "../common/collapse";

const ButtonComponent = ({ children }) => {
    return React.Children.map(children, (child, idx) => {
        // console.log(idx);
        return React.cloneElement(child, { idx });
    });
};

const Component = (idx) => {
    console.log(idx);
    return <div>{`${idx.idx + 1}.`} Компонент списка </div>;
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ButtonComponent>
                <Component />
                <Component />
                <Component />
            </ButtonComponent>
        </CollapseWrapper>
    );
};

export default ChildrenExercise;
