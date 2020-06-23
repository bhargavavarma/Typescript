import styled from '@emotion/styled'

import tw from 'tailwind.macro'

export const PostWrapper = styled.div`
  ${tw`
   mx-10 my-16
   `}
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid brown;
  border-radius: 8px;
  padding: 20px;
`

export const PostItem = styled.p`
  ${tw`
  
   `}
  margin-left: 10px;
  padding: 16px;
`
