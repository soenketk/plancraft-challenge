import React from 'react'
import ReactModal from 'react-modal'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { useRecoilState } from 'recoil'
import { previewState, viewCountState } from './atoms'

export const PreviewModal = () => {
  const [imgSource, setImgSource] = useRecoilState(previewState);
  const [viewCount, setViewCount] = useRecoilState(viewCountState(imgSource));
  return (
    <ReactModal
      isOpen={imgSource}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setImgSource('')}
      onAfterOpen={() => setViewCount(oldCount => oldCount + 1)}
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
      <div
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          padding: 5,
          backgroundColor: 'grey',
          opacity: 0.7,
          color: 'white'
        }}>
        Views: {viewCount}
      </div>
    </ReactModal>
  )
}
