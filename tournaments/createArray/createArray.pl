#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub createArray {
    my ($size) = @_;

    return [(1)x$size];
}
