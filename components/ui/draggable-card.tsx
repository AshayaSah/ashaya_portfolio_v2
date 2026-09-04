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
        "relative flex min-h-[34rem] w-full items-center justify-center overflow-clip [perspective:3000px]",
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
  hovered,
  onHoverChange,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>
  children: React.ReactNode
  className?: string
  hovered?: boolean
  onHoverChange?: (hovered: boolean) => void
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
    if (hovered) onHoverChange?.(false)
  }

  const enter = () => {
    onHoverChange?.(true)
  }

  const scale = hovered ? 1.35 : 1

  return (
    <div
      draggable={false}
      onMouseEnter={enter}
      onMouseDown={() => setDragging(true)}
      onMouseUp={() => setDragging(false)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "absolute min-h-54 w-60 cursor-grab overflow-hidden rounded-md bg-card p-2 shadow-2xl transition-transform duration-300 ease-out select-none transform-3d active:cursor-grabbing",
        hovered && "z-50 !shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]",
        className
      )}
      style={{
        willChange: "transform",
        transform: `translateX(${transform.x}px) translateY(${transform.y}px) scale(${scale}) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        zIndex: hovered ? 50 : undefined,
        userSelect: "none",
        touchAction: "none",
      }}
    >
      {children}
    </div>
  )
}
