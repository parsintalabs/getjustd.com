import { Loader } from '@/components/ui/loader'

export default function LoaderVariantDemo() {
  return (
    <div className="flex gap-6">
      <Loader variant="ring" />
      <Loader variant="bars" />
      <Loader variant="dots" />
      <Loader variant="spin" />
    </div>
  )
}