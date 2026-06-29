/* eslint-disable react/prop-types */

export const Skeleton = ({ className = '' }) => (
  <div className={`animate-pulse bg-canvas-paper rounded ${className}`} />
);

export const ArticleCardSkeleton = () => (
  <div className="rounded-marketing bg-canvas-light border border-hairline overflow-hidden">
    <Skeleton className="w-full h-56 rounded-none" />
    <div className="p-6 space-y-3">
      <Skeleton className="h-2.5 w-20 rounded-full" />
      <Skeleton className="h-6 w-full rounded-app-xs" />
      <Skeleton className="h-6 w-4/5 rounded-app-xs" />
      <div className="space-y-2 pt-1">
        <Skeleton className="h-4 w-full rounded-app-xs" />
        <Skeleton className="h-4 w-full rounded-app-xs" />
        <Skeleton className="h-4 w-2/3 rounded-app-xs" />
      </div>
      <div className="flex justify-between pt-2">
        <Skeleton className="h-2.5 w-20 rounded-full" />
        <Skeleton className="h-2.5 w-16 rounded-full" />
      </div>
    </div>
  </div>
);

export const ArticleGridSkeleton = ({ count = 6 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, i) => (
      <ArticleCardSkeleton key={i} />
    ))}
  </div>
);

export const BlogDetailSkeleton = () => (
  <div className="max-w-3xl mx-auto">
    <Skeleton className="w-full h-80 rounded-marketing mb-10" />
    <div className="space-y-4">
      <Skeleton className="h-10 w-3/4 rounded-app-xs" />
      <Skeleton className="h-10 w-1/2 rounded-app-xs" />
    </div>
    <Skeleton className="h-3 w-28 rounded-full mt-6 mb-10" />
    <div className="space-y-3">
      <Skeleton className="h-4 w-full rounded-app-xs" />
      <Skeleton className="h-4 w-full rounded-app-xs" />
      <Skeleton className="h-4 w-5/6 rounded-app-xs" />
    </div>
    <div className="space-y-3 mt-6">
      <Skeleton className="h-4 w-full rounded-app-xs" />
      <Skeleton className="h-4 w-4/5 rounded-app-xs" />
      <Skeleton className="h-4 w-full rounded-app-xs" />
    </div>
    <div className="space-y-3 mt-6">
      <Skeleton className="h-4 w-full rounded-app-xs" />
      <Skeleton className="h-4 w-2/3 rounded-app-xs" />
    </div>
  </div>
);

export const FormSkeleton = () => (
  <div className="space-y-8">
    <div>
      <Skeleton className="h-2.5 w-24 rounded-full mb-2" />
      <Skeleton className="w-full max-w-sm h-56 rounded-marketing" />
    </div>
    {[80, 64, 80].map((w, i) => (
      <div key={i} className="space-y-2">
        <Skeleton className={`h-2.5 w-${w === 80 ? '20' : '16'} rounded-full`} />
        <Skeleton className="h-12 w-full rounded-app-xs" />
      </div>
    ))}
    <div className="space-y-2">
      <Skeleton className="h-2.5 w-24 rounded-full" />
      <Skeleton className="h-28 w-full rounded-app-xs" />
    </div>
    <div className="grid grid-cols-2 gap-4">
      {[0, 1].map((i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-2.5 w-20 rounded-full" />
          <Skeleton className="h-12 w-full rounded-app-xs" />
        </div>
      ))}
    </div>
    <div className="space-y-2">
      <Skeleton className="h-2.5 w-16 rounded-full" />
      <Skeleton className="h-64 w-full rounded-app-xs" />
    </div>
    <Skeleton className="h-11 w-44 rounded-full" />
  </div>
);

export const SectionHeaderSkeleton = () => (
  <div className="mb-12 space-y-3">
    <Skeleton className="h-2.5 w-24 rounded-full" />
    <Skeleton className="h-10 w-56 rounded-app-xs" />
  </div>
);
