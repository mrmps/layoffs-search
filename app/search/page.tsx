import * as React from "react";
import ProfileCards from "@/components/profile-cards";
import SearchTextarea from "@/components/search-textarea";
import { Suspense } from "react";
import CardSkeleton from "@/components/card-skeletons";
import HorizontalExamples from "@/components/horizontal-examples";

export default function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  const keyString = `search=${searchParams?.q}`; // note this has to be unique for the skeletons to work

  return (
    <main className="flex min-h-screen flex-col items-center p-6 sm:pt-3">
      <SearchTextarea />
      <HorizontalExamples />
      <div className="mt-10 items-center">
        <Suspense
          key={keyString}
          fallback={
           <CardSkeleton />
          }
        >
          <ProfileCards searchQuery={searchParams.q as string} />
        </Suspense>
      </div>
    </main>
  );
}
