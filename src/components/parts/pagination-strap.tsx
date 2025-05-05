"use client";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const PaginationStrap = ( { pagination } : { pagination : { total : number, page : number, last : boolean, pages : number } } ) => {

  const { page, pages, last } = pagination;

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = Math.max(1, page - 2); i <= Math.min(pages, page + 2); i++) { pageNumbers.push(i) }
    return pageNumbers;
  };

  return (
    <Pagination className="py-6">
      <PaginationPrevious href={`?page=${page - 1}`} aria-disabled={page <= 1} className={page <= 1 ? "pointer-events-none opacity-50" : ""}/>
      <PaginationContent>
        {renderPageNumbers().map((number) => (
          <PaginationItem key={number}><PaginationLink href={`?page=${number}`} className={page === number ? "font-bold" : ""}>{number}</PaginationLink></PaginationItem>
        ))}
        {pages > 5 && page + 2 < pages && <PaginationItem><PaginationEllipsis /></PaginationItem> }
      </PaginationContent>
      <PaginationNext href={`?page=${page + 1}`} aria-disabled={last} className={last ? "pointer-events-none opacity-50" : ""}/>
    </Pagination>
  );

};

export default PaginationStrap;
