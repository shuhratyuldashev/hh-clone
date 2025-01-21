import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination"

const PaginationVacancies = () => {
  return (
    <section>
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#"/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" isActive>
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" >
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    </section>
  )
}

export default PaginationVacancies