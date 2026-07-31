"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export function DraggableCardContainer({
  children,
  className,
  ref,
}: {
  children: React.ReactNode
  className?: string
  ref?: React.Ref<HTMLDivElement>
}) {
  return (
    <div
      ref={ref}
      className={cn(
        "[perspective:3000px] relative flex min-h-[30rem] w-full items-center justify-center overflow-clip",
        className
      )}
    >
      {children}
    </div>
  )
}

export function DraggableCardBody({
  containerRef,
  children,
  className,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>
  children: React.ReactNode
  className?: string
}) {
  const [dragging, setDragging] = React.useState(false)
  const [transform, setTransform] = React.useState({
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
  })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 14
    const rotateY = (x - centerX) / 14
    setTransform({
      x: dragging ? (x - centerX) / 2 : (x - centerX) / 12,
      y: dragging ? (y - centerY) / 2 : (y - centerY) / 12,
      rotateX,
      rotateY,
    })
  }

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0, rotateX: 0, rotateY: 0 })
    setDragging(false)
  }

  return (
    <div
      draggable={false}
      onMouseDown={() => setDragging(true)}
      onMouseUp={() => setDragging(false)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "transform-3d absolute min-h-54 w-60 cursor-grab overflow-hidden rounded-md bg-neutral-100 p-2 shadow-2xl select-none active:cursor-grabbing dark:bg-neutral-900",
        className
      )}
      style={{
        willChange: "transform",
        transform: `translateX(${transform.x}px) translateY(${transform.y}px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        userSelect: "none",
        touchAction: "none",
      }}
    >
      {children}
    </div>
  )
}
