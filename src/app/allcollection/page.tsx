import React from 'react'
import CategoryList from '@/components/collection/categoryList';
import CatBanner from '@/components/collection/catBanner';
import CatItems from '@/components/collection/catItems';
export default function page() {
  return (
    <div className=''>
<CategoryList />
<CatBanner />
<CatItems />
    </div>
  )
}
