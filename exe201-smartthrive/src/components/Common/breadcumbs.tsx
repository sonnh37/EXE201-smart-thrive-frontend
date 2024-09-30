import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/components/ui/breadcumbs';
import {Fragment} from 'react';

type BreadcrumbItemProps = {
    title: string;
    link: string;
};

export function Breadcrumbs({items}: { items: BreadcrumbItemProps[] }) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {items.map((item, index) => (
                    <Fragment key={item.title}>
                        {index !== items.length - 1 && (
                            <BreadcrumbItem>
                                <BreadcrumbLink href={item.link}>{item.title}</BreadcrumbLink>
                            </BreadcrumbItem>
                        )}
                        {index < items.length - 1 && (
                            <BreadcrumbSeparator/>
                        )}
                        {index === items.length - 1 && (
                            <BreadcrumbPage>{item.title}</BreadcrumbPage>
                        )}
                    </Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
