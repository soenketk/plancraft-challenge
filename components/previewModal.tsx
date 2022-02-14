import React from 'react'
import ReactModal from 'react-modal'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { useRecoilState } from 'recoil'
import { previewState } from './atoms'

export const PreviewModal = () => {
  const [imgSource, setImgSource] = useRecoilState(previewState);
  return (
    <ReactModal
      isOpen={imgSource}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setImgSource('')}
      style={{
        content:{
          padding: 0,
          margin: 'auto',
          width: 'fit-content',
          height: 'fit-content',
        }
      }}
    >
      <TransformWrapper>
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <TransformComponent>
              <img src={imgSource} alt="" />
            </TransformComponent>
        )}
      </TransformWrapper>
    </ReactModal>
  )
}
