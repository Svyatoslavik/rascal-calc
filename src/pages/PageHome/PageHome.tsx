import react, { useContext, useEffect } from 'react';


import { MainLayoutContext } from '../../layouts/MainLayout/MainLayout';


export function PageHome() {

    const layoutCtx = useContext(MainLayoutContext);
    useEffect(() => layoutCtx('Главная', null), [layoutCtx]);
    return (
        <div>Some data</div>
    );
}
