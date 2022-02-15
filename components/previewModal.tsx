import React from 'react'
import ReactModal from 'react-modal'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { useRecoilState } from 'recoil'
import { previewState, viewCountState } from './atoms'

/**
 * A modal to preview the images.
 */
export const PreviewModal = () => {
  const [imgSource, setImgSource] = useRecoilState(previewState);
  const [viewCount, setViewCount] = useRecoilState(viewCountState(imgSource));
  return (
    <ReactModal
      isOpen={imgSource} // hide if no image url provided
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setImgSource('')} // set the previewState as it controls the visibility of the modal
      onAfterOpen={() => setViewCount(oldCount => oldCount + 1)} // increase viewCount
      style={{
        content: {
          padding: 0,
          margin: 'auto',
          width: 'fit-content',
          height: 'fit-content',
        }
      }}
    >
      {/* TransformWrapper and TransformComponent make the image zoomable */}
      <TransformWrapper>
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <TransformComponent>
            <img src={imgSource} alt="" />
          </TransformComponent>
        )}
      </TransformWrapper>
      {/* display how often the image has been previewed (including  now) */}
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
