#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub replaceMiddle {
    my ($arr) = @_;

    my $len = scalar(@$arr);
    my $halfLen = int($len / 2);

    unless ($len & 1) {
        @$arr[$halfLen] = $$arr[$halfLen - 1] + $$arr[$halfLen];
        splice($arr, $halfLen - 1, 1);
    }

    return $arr;
}
