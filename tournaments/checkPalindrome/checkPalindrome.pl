#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub checkPalindrome {
    my ($inputString) = @_;

    return $inputString eq join('', reverse(split('', $inputString))) ? 1 : 0;
}
